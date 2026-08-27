import { cn } from "@/lib/utils";

interface StatBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBadge({
  value,
  label,
  className,
}: StatBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 text-center",
        className
      )}
    >
      <span className="font-display text-3xl font-medium text-ink md:text-4xl">
        {value}
      </span>
      <span className="text-sm text-ink-soft">
        {label}
      </span>
    </div>
  );
}
