import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#ededed]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-widest text-foreground"
        >
          Grayscale<span className="text-xs align-top">&reg;</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-foreground/60">
          <Link href="#" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Careers
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Contact
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </nav>

        <span className="text-xs text-foreground/40">
          &copy; 2026 Grayscale
        </span>
      </div>
    </footer>
  )
}
