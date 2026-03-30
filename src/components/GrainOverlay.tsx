"use client";

import { useEffect, useRef } from "react";

export default function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    const imageData = ctx.createImageData(size, size);
    const d = imageData.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.random() * 255;
      d[i] = v;
      d[i + 1] = v;
      d[i + 2] = v;
      d[i + 3] = 12;
    }
    ctx.putImageData(imageData, 0, 0);

    el.style.backgroundImage = `url(${canvas.toDataURL()})`;
    el.style.backgroundRepeat = "repeat";
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.3 }}
    />
  );
}
