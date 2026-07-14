"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 60;

const currentFrame = (index: number) =>
  `/sequence-lite/frame_${index.toString().padStart(3, "0")}.webp`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    let cancelled = false;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    const finish = () => {
      if (cancelled) return;
      setImages(loadedImages.filter(Boolean));
      setIsReady(true);
      if (canvasRef.current && loadedImages[0]) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) renderFrame(0, ctx, loadedImages);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = currentFrame(i);

      const onDone = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) finish();
      };

      img.onload = onDone;
      img.onerror = onDone;
      loadedImages[i] = img;
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const renderFrame = (
    index: number,
    ctx: CanvasRenderingContext2D,
    imgs = images
  ) => {
    if (!imgs[index] || !canvasRef.current) return;
    const img = imgs[index];
    const canvas = canvasRef.current;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isReady) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) renderFrame(frameIndex, ctx);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentProgress = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(currentProgress * FRAME_COUNT))
        );
        if (images.length > 0) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) renderFrame(frameIndex, ctx);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress, isReady]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212] pt-16">
      <div className="sticky top-16 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`h-full w-full block transition-opacity duration-700 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#121212]">
            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white/70 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              Loading experience {loadProgress}%
            </p>
          </div>
        )}

        <Overlay scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
