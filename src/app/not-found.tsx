import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center bg-enamel">
      <p className="font-mono text-8xl font-bold text-coral/25">404</p>
      <h1 className="mt-4 font-display text-3xl font-medium text-ink">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-coral-deep transition-colors focus:outline-none focus:ring-2 focus:ring-coral/50 focus:ring-offset-2"
      >
        <Home className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
