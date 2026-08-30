import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface HorizontalMarqueeProps {
  children: ReactNode;
  className?: string;
  /** 左右フェードの基準色（Tailwindの from-* クラス） */
  edgeFrom?: string;
  /** スクロール速度クラス */
  speedClass?: string;
}

/**
 * 関連チャンネル同型の横スクロールマーキー
 * 同一内容を2列並べ、-50% でシームレスにループ
 */
export function HorizontalMarquee({
  children,
  className,
  edgeFrom = "from-card",
  speedClass = "channel-marquee",
}: HorizontalMarqueeProps) {
  const items = Children.toArray(children);

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
      <div className={cn(speedClass, "marquee-track flex w-max py-2")}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={cn("flex shrink-0", className)}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((child, index) =>
              isValidElement(child)
                ? cloneElement(child as ReactElement<{ key?: string }>, {
                    key: `${copy}-${index}`,
                  })
                : child
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
