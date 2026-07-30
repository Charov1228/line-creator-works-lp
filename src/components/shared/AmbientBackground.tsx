import { cn } from "@/lib/utils";

export type Atmosphere =
  | "none"
  | "hero"
  | "glow-left"
  | "glow-right"
  | "soft-green"
  | "arc"
  | "diagonal"
  | "final";

interface AmbientBackgroundProps {
  atmosphere?: Atmosphere;
  className?: string;
}

/**
 * セクション背景の大きな抽象オブジェクト
 * 文字の背面・pointer-eventsなし・超低速の常時モーション
 */
export function AmbientBackground({
  atmosphere = "none",
  className,
}: AmbientBackgroundProps) {
  if (atmosphere === "none") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      {atmosphere === "hero" && (
        <>
          <div className="ambient-drift-a absolute -top-[20%] -left-[15%] size-[75vmin] rounded-full bg-line-green/[0.11] blur-[100px]" />
          <div className="ambient-drift-b absolute -right-[10%] -bottom-[25%] size-[60vmin] rounded-full bg-line-green/[0.08] blur-[90px]" />
          <div className="ambient-line-slide absolute top-[35%] left-[-20%] h-[5px] w-[140%] bg-gradient-to-r from-transparent via-line-green/35 to-transparent blur-[1px]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </>
      )}

      {atmosphere === "glow-left" && (
        <>
          <div className="ambient-drift-a absolute -bottom-[30%] -left-[20%] size-[70vmin] rounded-full bg-line-green/[0.09] blur-[110px]" />
          <div className="ambient-drift-b absolute top-[10%] -left-[5%] size-[36vmin] rounded-full bg-line-green/[0.06] blur-[80px] max-md:hidden" />
          <div className="ambient-line-slide absolute top-[55%] left-[-25%] h-[3px] w-[120%] bg-gradient-to-r from-transparent via-line-green/22 to-transparent max-md:hidden" />
        </>
      )}

      {atmosphere === "glow-right" && (
        <>
          <div className="ambient-drift-b absolute -top-[20%] -right-[18%] size-[65vmin] rounded-full bg-line-green/[0.09] blur-[100px]" />
          <div className="ambient-drift-a absolute bottom-[5%] right-[5%] size-[34vmin] rounded-full bg-line-green/[0.06] blur-[70px] max-md:hidden" />
          <div className="ambient-line-slide absolute top-[40%] right-[-25%] h-[3px] w-[120%] bg-gradient-to-r from-transparent via-line-green/20 to-transparent max-md:hidden" />
        </>
      )}

      {atmosphere === "soft-green" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-line-green/[0.07] via-transparent to-line-green/[0.05]" />
          <div className="ambient-breathe absolute top-1/2 left-1/2 size-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-line-green/[0.08] blur-[120px]" />
          <div className="ambient-drift-a absolute -left-[10%] top-[20%] size-[40vmin] rounded-full bg-line-green/[0.05] blur-[90px] max-md:hidden" />
        </>
      )}

      {atmosphere === "arc" && (
        <>
          <svg
            className="ambient-drift-a absolute -top-[10%] left-1/2 h-[80%] w-[160%] -translate-x-1/2 max-md:opacity-70"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 480 C 200 80, 1000 80, 1250 480"
              stroke="rgba(6,199,85,0.16)"
              strokeWidth="64"
              strokeLinecap="round"
            />
            <path
              d="M0 520 C 280 160, 920 160, 1200 520"
              stroke="rgba(6,199,85,0.1)"
              strokeWidth="3"
            />
          </svg>
          <div className="ambient-drift-b absolute -right-[15%] bottom-[-20%] size-[50vmin] rounded-full bg-line-green/[0.07] blur-[100px]" />
        </>
      )}

      {atmosphere === "diagonal" && (
        <>
          <div className="ambient-line-slide absolute top-[20%] left-[-30%] h-[4px] w-[160%] bg-gradient-to-r from-transparent via-line-green/30 to-transparent" />
          <div className="ambient-line-slide absolute top-[58%] left-[-20%] h-[2px] w-[140%] bg-gradient-to-r from-transparent via-line-green/18 to-transparent max-md:hidden" style={{ animationDelay: "-12s" }} />
          <div className="ambient-drift-a absolute -right-[12%] top-[40%] size-[55vmin] rounded-full bg-line-green/[0.08] blur-[110px]" />
        </>
      )}

      {atmosphere === "final" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-line-green/[0.09] to-black" />
          <div className="ambient-breathe absolute top-1/2 left-1/2 size-[75vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-line-green/[0.14] blur-[100px]" />
          <div className="ambient-drift-a absolute -top-[10%] right-[10%] size-[40vmin] rounded-full bg-line-green/[0.08] blur-[80px] max-md:hidden" />
          <div className="ambient-line-slide absolute top-[45%] left-[-20%] h-[4px] w-[140%] bg-gradient-to-r from-transparent via-line-green/28 to-transparent" />
        </>
      )}
    </div>
  );
}
