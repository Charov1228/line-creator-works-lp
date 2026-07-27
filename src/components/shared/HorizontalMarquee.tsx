import { cn } from "@/lib/utils";

interface HorizontalMarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** 左右フェードの基準色（Tailwindの from-* クラス） */
  edgeFrom?: string;
  /** スクロール速度クラス */
  speedClass?: string;
}

/**
 * 関連チャンネルと同型の横スクロールマーキー
 * children を2周分並べて常時ループ
 */
export function HorizontalMarquee({
  children,
  className,
  edgeFrom = "from-card",
  speedClass = "channel-marquee",
}: HorizontalMarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent md:w-16",
          edgeFrom
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l to-transparent md:w-16",
          edgeFrom
        )}
      />
      <div className={cn(speedClass, "flex w-max gap-4 py-2", className)}>
        {children}
        {children}
      </div>
    </div>
  );
}
