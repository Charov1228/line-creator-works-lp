"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { StrikeLine } from "@/components/shared/StrikeLine";
import { cn } from "@/lib/utils";

const LINE1 = "学ぶだけで終わらない。";
const LINE2_PREFIX = "仕事で使えるスキル";
const LINE2_SUFFIX = "へ。";

interface TypewriterHeadlineProps {
  className?: string;
  /** オープニング後など、タイピング開始までの遅延(ms) */
  startDelayMs?: number;
}

/**
 * ヒーロー見出しのタイピング演出
 * 1行目 → 2行目の順に表示。reduced-motion時は即時全文表示
 */
export function TypewriterHeadline({
  className,
  startDelayMs = 2800,
}: TypewriterHeadlineProps) {
  const reduce = useReducedMotion();
  const [line1, setLine1] = useState(reduce ? LINE1 : "");
  const [line2Prefix, setLine2Prefix] = useState(reduce ? LINE2_PREFIX : "");
  const [line2Suffix, setLine2Suffix] = useState(reduce ? LINE2_SUFFIX : "");
  const [phase, setPhase] = useState<"wait" | "line1" | "line2" | "done">(
    reduce ? "done" : "wait"
  );
  const [showCursor, setShowCursor] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    const timers: number[] = [];

    const typeChars = (
      text: string,
      setter: (value: string) => void,
      speedMs: number,
      onDone: () => void
    ) => {
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setter(text.slice(0, i));
        if (i < text.length) {
          timers.push(window.setTimeout(tick, speedMs));
        } else {
          onDone();
        }
      };
      timers.push(window.setTimeout(tick, speedMs));
    };

    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setPhase("line1");
        typeChars(LINE1, setLine1, 70, () => {
          if (cancelled) return;
          timers.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setPhase("line2");
              typeChars(LINE2_PREFIX, setLine2Prefix, 75, () => {
                if (cancelled) return;
                typeChars(LINE2_SUFFIX, setLine2Suffix, 90, () => {
                  if (cancelled) return;
                  setPhase("done");
                  timers.push(
                    window.setTimeout(() => {
                      if (!cancelled) setShowCursor(false);
                    }, 900)
                  );
                });
              });
            }, 280)
          );
        });
      }, startDelayMs)
    );

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce, startDelayMs]);

  const cursorOnLine1 = phase === "line1" || phase === "wait";
  const cursorOnLine2 = phase === "line2" || (phase === "done" && showCursor);
  const line2Ready = phase === "done" && line2Prefix.length === LINE2_PREFIX.length;

  return (
    <h1
      className={cn(
        "text-[clamp(1.55rem,5.4vw,2.65rem)] leading-[1.3] font-bold tracking-tight text-white",
        className
      )}
      aria-label={`${LINE1}${LINE2_PREFIX}${LINE2_SUFFIX}`}
    >
      <span className="block whitespace-nowrap">
        {line1}
        {showCursor && cursorOnLine1 && <TypingCursor />}
      </span>
      <span className="mt-0.5 block min-h-[1.3em] whitespace-nowrap md:mt-1">
        {line2Ready ? (
          <>
            <StrikeLine lineClassName="top-[62%] h-[0.68em] bg-line-green/80">
              <span className="text-gradient-green">{line2Prefix}</span>
            </StrikeLine>
            <span className="text-white">{line2Suffix}</span>
          </>
        ) : (
          <>
            <span className="text-gradient-green">{line2Prefix}</span>
            <span className="text-white">{line2Suffix}</span>
          </>
        )}
        {showCursor && cursorOnLine2 && <TypingCursor />}
      </span>
    </h1>
  );
}

function TypingCursor() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[0.95em] w-[0.08em] translate-y-[0.08em] bg-line-green align-baseline motion-safe:animate-pulse"
    />
  );
}
