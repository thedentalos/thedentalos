export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-enamel">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-3 border-coral/30 border-t-coral" />
        <p className="text-sm text-ink-soft">Loading...</p>
      </div>
    </div>
  );
}
