"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** 画像パス（public/ 配下）。未配置時はプレースホルダーを表示 */
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  rounded?: "none" | "lg" | "full";
  priority?: boolean;
}

const roundedClassMap = {
  none: "rounded-none",
  lg: "rounded-2xl",
  full: "rounded-full",
} as const;

/**
 * 画像差し替え用コンポーネント
 *
 * 使い方:
 * 1. public/images/ 配下に画像を配置
 * 2. content.ts の image パスを更新
 * 3. 自動的に実画像が表示される
 */
export function PlaceholderImage({
  src,
  alt,
  aspectRatio = "aspect-video",
  className,
  rounded = "lg",
  priority = false,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);
  const roundedClass = roundedClassMap[rounded];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5",
        aspectRatio,
        roundedClass,
        className
      )}
    >
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-white/10">
              <svg
                className="size-6 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xs text-white/30">{alt}</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", roundedClass)}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
