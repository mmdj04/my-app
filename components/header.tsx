import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-black/10 bg-[#ededed]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-widest text-foreground"
        >
          Grayscale<span className="text-xs align-top">&reg;</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 sm:flex">
          <Link href="#" className="transition-colors hover:text-foreground">
            Properties
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Solutions
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
