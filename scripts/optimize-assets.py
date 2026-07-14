#!/usr/bin/env python3
"""Generate optimized hero frames and social preview assets."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SEQUENCE = PUBLIC / "sequence"
LITE = PUBLIC / "sequence-lite"
STEP = 4  # every 4th frame → 60 frames


def optimize_sequence() -> int:
    LITE.mkdir(exist_ok=True)
    frames = sorted(SEQUENCE.glob("frame_*.png"))
    if not frames:
        print("No sequence frames found")
        return 0

    count = 0
    for i, src in enumerate(frames[::STEP]):
        out = LITE / f"frame_{i:03d}.webp"
        with Image.open(src) as img:
            img = img.convert("RGB")
            max_w = 1280
            if img.width > max_w:
                ratio = max_w / img.width
                img = img.resize((max_w, int(img.height * ratio)), Image.Resampling.LANCZOS)
            img.save(out, "WEBP", quality=78, method=6)
        count += 1

    print(f"Wrote {count} lite frames to {LITE}")
    return count


def write_og_image() -> None:
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), "#121212")
    draw = ImageDraw.Draw(img)

    draw.rectangle([(0, 0), (w, 8)], fill="#ffffff")
    draw.text((72, 120), "Geethika Reddy Konda", fill="#ffffff")
    draw.text((72, 210), "AI & Software Engineer", fill="#a3a3a3")
    draw.text(
        (72, 300),
        "Knowledge graphs · Agentic AI · Full-stack",
        fill="#737373",
    )
    draw.text((72, 520), "geethika2506.github.io", fill="#525252")

    img.save(PUBLIC / "og.png", "PNG", optimize=True)
    print("Wrote public/og.png")


def write_favicon() -> None:
    size = 64
    img = Image.new("RGB", (size, size), "#121212")
    draw = ImageDraw.Draw(img)
    draw.ellipse([(8, 8), (56, 56)], outline="#ffffff", width=3)
    draw.text((22, 18), "G", fill="#ffffff")
    img.save(PUBLIC / "favicon.png", "PNG")
    print("Wrote public/favicon.png")


if __name__ == "__main__":
    optimize_sequence()
    write_og_image()
    write_favicon()
