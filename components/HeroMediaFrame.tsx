"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/site";

const FRAME_COUNT = 60;
const FPS = 10; // slow-motion sequence playback
const VIDEO_PLAYBACK_RATE = 0.5;
const VIDEO_TIMEOUT_MS = 2500;

const frameSrc = (index: number) =>
  assetPath(`/sequence-lite/frame_${index.toString().padStart(3, "0")}.webp`);

type HeroMediaFrameProps = {
  videoSrc?: string;
  className?: string;
};

export default function HeroMediaFrame({
  videoSrc = assetPath("/hero.mp4"),
  className = "",
}: HeroMediaFrameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"checking" | "video" | "sequence">("checking");
  const [ready, setReady] = useState(false);
  const posterSrc = frameSrc(0);

  // Prefer sequence unless hero.mp4 actually exists
  useEffect(() => {
    let cancelled = false;

    const checkVideo = async () => {
      try {
        const res = await fetch(videoSrc, { method: "HEAD" });
        if (cancelled) return;
        setMode(res.ok ? "video" : "sequence");
      } catch {
        if (!cancelled) setMode("sequence");
      }
    };

    checkVideo();
    return () => {
      cancelled = true;
    };
  }, [videoSrc]);

  // Video load timeout — missing/broken mp4 falls back to sequence
  useEffect(() => {
    if (mode !== "video") return;

    const timeout = window.setTimeout(() => {
      setMode("sequence");
      setReady(false);
    }, VIDEO_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [mode]);

  // Sequence animation
  useEffect(() => {
    if (mode !== "sequence") return;

    let cancelled = false;
    let frame = 0;
    let lastTime = 0;
    let raf = 0;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (index: number) => {
      const img = images[index];
      if (!img?.complete || img.naturalWidth === 0) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      const hRatio = w / img.width;
      const vRatio = h / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const dw = img.width * ratio;
      const dh = img.height * ratio;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frame);
    };

    const loop = (time: number) => {
      if (cancelled) return;
      if (time - lastTime >= 1000 / FPS) {
        draw(frame);
        frame = (frame + 1) % FRAME_COUNT;
        lastTime = time;
      }
      raf = requestAnimationFrame(loop);
    };

    const onFirstFrame = () => {
      if (cancelled) return;
      resize();
      setReady(true);
      draw(0);
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (i === 0) onFirstFrame();
      };
      img.onerror = () => {
        if (i === 0) onFirstFrame();
      };
      images[i] = img;
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [mode]);

  const showSpinner = mode === "checking" || !ready;

  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[420px] ${className}`}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[1, 1.12, 1.24, 1.36].map((scale, i) => (
          <div
            key={scale}
            className="absolute rounded-full border border-violet-500/20"
            style={{
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              opacity: 0.35 - i * 0.06,
              boxShadow: i === 0 ? "0 0 30px rgba(191,0,255,0.15)" : undefined,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-[8%] overflow-hidden rounded-2xl border border-cyan-400/20 bg-black shadow-[0_0_60px_rgba(0,212,255,0.12)]">
        {/* Poster — visible instantly while video/sequence loads */}
        {(mode === "sequence" || mode === "checking") && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterSrc}
            alt="Profile preview"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              ready ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {mode === "video" && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            onCanPlay={(e) => {
              e.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE;
              setReady(true);
            }}
            onError={() => {
              setReady(false);
              setMode("sequence");
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {mode === "sequence" && (
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {showSpinner && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0612]/60">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
          </div>
        )}

        <div className="scanlines pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-cyan-400/5" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-cyan-400/50" />
        <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-cyan-400/50" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-violet-500/50" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-violet-500/50" />
      </div>
    </div>
  );
}
