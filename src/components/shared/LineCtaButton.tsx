"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface LineCtaButtonProps {
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  /** ボタン文言のカスタマイズ */
  label?: string;
  /** サブラベル（例: 無料・30秒で完了） */
  sublabel?: string;
  fullWidth?: boolean;
}

/**
 * 公式LINE登録CTAボタン
 * すべてのCTAはこのコンポーネントに統一
 */
export function LineCtaButton({
  size = "lg",
  variant = "default",
  className,
  label = "公式LINEから無料面談を予約する",
  sublabel,
  fullWidth = false,
}: LineCtaButtonProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", fullWidth && "w-full")}>
      <Button
        asChild
        size={size}
        variant={variant}
        className={cn(fullWidth && "w-full", className)}
      >
        <Link
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <MessageCircle className="size-5" />
          {label}
        </Link>
      </Button>
      {sublabel && (
        <p className="text-xs text-white/40">{sublabel}</p>
      )}
    </div>
  );
}
