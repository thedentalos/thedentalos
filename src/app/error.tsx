"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center bg-enamel">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-coral-tint">
        <AlertTriangle className="h-8 w-8 text-coral-deep" strokeWidth={1.5} />
      </div>
      <h1 className="font-display text-3xl font-medium text-ink">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-soft">
        An unexpected error occurred. Please try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 text-sm font-semibold text-white hover:bg-coral-deep transition-colors focus:outline-none focus:ring-2 focus:ring-coral/50 focus:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-teal px-6 py-3 text-sm font-semibold text-teal no-underline hover:bg-teal-tint transition-colors focus:outline-none focus:ring-2 focus:ring-teal/50 focus:ring-offset-2"
        >
          <Home className="h-4 w-4" />
          Go home
        </Link>
      </div>
    </div>
  );
}
