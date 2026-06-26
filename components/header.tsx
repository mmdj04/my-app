import { Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#ededed]">
      <div className="flex justify-end gap-6 px-6 py-2 text-xs font-medium uppercase tracking-wider text-foreground">
        <Link href="#" className="hover:underline">
          Tax & Regulatory Documents
        </Link>
        <Link href="#" className="hover:underline">
          Contact
        </Link>
        <Link href="#" className="hover:underline">
          Investor Login
        </Link>
      </div>

      <div className="flex items-center justify-between border-t border-black/10 px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold uppercase tracking-widest text-foreground"
        >
          Grayscale<span className="text-xs align-top">&reg;</span>
        </Link>
        <button aria-label="Menu" className="text-foreground">
          <Menu className="size-6" />
        </button>
      </div>
    </header>
  )
}
