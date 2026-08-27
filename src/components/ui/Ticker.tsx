import { cn } from "@/lib/utils";

interface TickerProps {
  items: string[];
  className?: string;
}

export function Ticker({ items, className }: TickerProps) {
  const row = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="ticker-track flex w-max items-center" aria-hidden="true">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap pr-10 text-sm font-medium text-ink-soft"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
