import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** 未指定の場合はリンクなし */
  href?: string;
  showText?: boolean;
}

const sizeMap = {
  sm: { width: 36, height: 36, text: "text-xs" },
  md: { width: 48, height: 48, text: "text-sm" },
  lg: { width: 72, height: 72, text: "text-base" },
  xl: { width: 120, height: 120, text: "text-lg" },
} as const;

/**
 * Line Creator Works ロゴ
 * 紋章ロゴ＋任意でテキスト表示
 */
export function Logo({
  className,
  size = "md",
  href,
  showText = false,
}: LogoProps) {
  const { width, height, text } = sizeMap[size];

  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt="Line Creator Works"
        width={width}
        height={height}
        className="shrink-0 object-contain"
        priority={size === "xl"}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-[10px] font-medium tracking-wider text-white/50 uppercase">
            けーさんとたろー 公式
          </span>
          <span className={cn("font-bold text-white", text)}>
            Line Creator Works
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex transition opacity-90 hover:opacity-100">
        {content}
      </Link>
    );
  }

  return content;
}
