"use client";

import { useEffect, useState } from "react";

/**
 * Subtle film-grain texture rendered to a canvas data URL once on mount.
 * Stays light: a single 256×256 tile tiled by background-repeat.
 */
export default function GrainOverlay() {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 14; // very low alpha for subtlety
    }
    ctx.putImageData(imageData, 0, 0);
    setDataUrl(canvas.toDataURL("image/png"));
  }, []);

  if (!dataUrl) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.35]"
      style={{
        backgroundImage: `url(${dataUrl})`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
