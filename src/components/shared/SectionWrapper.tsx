import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** 背景バリエーション */
  variant?: "default" | "card" | "gradient";
}

/**
 * セクション共通ラッパー
 * 余白・最大幅・背景を統一
 */
export function SectionWrapper({
  id,
  children,
  className,
  variant = "default",
}: SectionWrapperProps) {
  const bgClass = {
    default: "bg-black",
    card: "bg-card",
    gradient:
      "bg-gradient-to-b from-black via-card to-black",
  }[variant];

  return (
    <section id={id} className={cn("relative py-20 md:py-32", bgClass, className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

/** セクション見出しの統一コンポーネント */
export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left"
      )}
    >
      {label && (
        <p className="mb-3 text-sm font-medium tracking-widest text-line-green uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
