import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mono-label text-cyan">You&rsquo;ve Entered An Undefined State.</p>
      <h1 className="mt-6 font-display text-[22vw] font-medium leading-none text-white md:text-[12vw]">
        404
      </h1>
      <p className="mt-6 max-w-sm text-muted">Let&rsquo;s get you back to reality.</p>
      <Link
        href="/"
        className="mono-label mt-10 rounded-full border border-cyan px-7 py-3.5 text-cyan hover:bg-cyan hover:text-black"
      >
        Return Home →
      </Link>
    </main>
  );
}
