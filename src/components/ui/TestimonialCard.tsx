import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  attribution,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border border-line bg-white p-8",
        className
      )}
    >
      <Quote className="mb-4 h-6 w-6 text-coral/25" />
      <blockquote className="flex-1 text-base leading-relaxed text-ink-soft">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-4 text-sm font-medium text-ink">{attribution}</p>
    </div>
  );
}
