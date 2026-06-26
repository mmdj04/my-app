import Link from "next/link"
import { Button } from "@/components/ui/button"

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

function SocialIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-black/20 text-foreground transition-colors hover:bg-black/5"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#ededed]">
      {/* Main footer */}
      <div className="grid grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-4">
        {/* Coluna 1: Logo + Subscribe + Social */}
        <div className="flex flex-col gap-6">
          <div className="text-6xl font-bold tracking-tighter">G</div>
          <p className="max-w-[240px] text-sm leading-relaxed text-foreground">
            Stay on top of the latest crypto news and insights
          </p>
          <Button
            variant="outline"
            className="w-fit rounded-none border-foreground/30 px-6 uppercase tracking-wider"
          >
            Subscribe
          </Button>
          <div className="flex gap-3">
            <SocialIcon label="Instagram">
              <InstagramIcon className="size-4" />
            </SocialIcon>
            <SocialIcon label="X">
              <XIcon className="size-3" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <FacebookIcon className="size-4" />
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <LinkedinIcon className="size-4" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <YoutubeIcon className="size-4" />
            </SocialIcon>
          </div>
        </div>

        {/* Coluna 2: Investment Products */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
            Investment Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-foreground/70">
            <li><Link href="#" className="hover:underline">ETFs/ETPs</Link></li>
            <li><Link href="#" className="hover:underline">Publicly Traded Funds</Link></li>
            <li><Link href="#" className="hover:underline">Private Funds</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Research */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
            Research
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-foreground/70">
            <li><Link href="#" className="hover:underline">Market Commentary</Link></li>
            <li><Link href="#" className="hover:underline">Reports</Link></li>
            <li><Link href="#" className="hover:underline">Videos & Webinars</Link></li>
            <li><Link href="#" className="hover:underline">Token Fundamentals</Link></li>
            <li><Link href="#" className="hover:underline">Explore All</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Company + Resources */}
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-foreground/70">
              <li><Link href="#" className="hover:underline">About Grayscale</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Resources
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-foreground/70">
              <li><Link href="#" className="hover:underline">Tax & Regulatory Documents</Link></li>
              <li><Link href="#" className="hover:underline">The Grayscale Glossary</Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
              <li><Link href="#" className="hover:underline">Financial Professionals</Link></li>
              <li><Link href="#" className="hover:underline">Grayscale Crypto Sectors</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 px-6 py-5 text-sm text-foreground sm:flex-row">
        <span>&copy; 2026 Grayscale. All rights reserved</span>
        <div className="flex gap-6">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Social Media Disclosure</Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-black/10 px-6 py-8 text-xs leading-relaxed text-foreground/60">
        <p>
          Grayscale Operating, LLC (&ldquo;GSO&rdquo; d/b/a Grayscale Investments) is the parent
          holding company of Grayscale Advisors, LLC (&ldquo;GSA&rdquo;), an SEC-registered
          investment adviser, as well Grayscale Securities, LLC (&ldquo;GSS&rdquo;), an
          SEC-registered broker/dealer and member of FINRA, and Grayscale Investments
          Sponsors, LLC (&ldquo;GSIS&rdquo;, together with GSO, GSS, and GSA, &ldquo;Grayscale&rdquo; or
          &ldquo;Grayscale Investments&rdquo;). GSIS is not registered as an investment adviser
          under the Investment Advisers Act of 1940 and none of the investment products
          (&ldquo;Products&rdquo;) sponsored or managed by GSIS are registered under the
          Investment Company Act of 1940.
        </p>

        <p className="mt-4">
          <strong className="text-foreground/80">
            This information must be preceded or accompanied by a prospectus for the
            Grayscale Trusts. Click the following links to view a prospectus:
          </strong>{" "}
          <Link href="#" className="font-semibold underline">BTC</Link>,{" "}
          <Link href="#" className="font-semibold underline">GBTC</Link>,{" "}
          <Link href="#" className="font-semibold underline">GLNK</Link>,{" "}
          <Link href="#" className="font-semibold underline">GDLC</Link>,{" "}
          <Link href="#" className="font-semibold underline">GDOG</Link>,{" "}
          <Link href="#" className="font-semibold underline">ETHE</Link>,{" "}
          <Link href="#" className="font-semibold underline">ETH</Link>,{" "}
          <Link href="#" className="font-semibold underline">GSOL</Link>,{" "}
          <Link href="#" className="font-semibold underline">GSUI</Link>,{" "}
          <Link href="#" className="font-semibold underline">GXRP</Link>,{" "}
          <Link href="#" className="font-semibold underline">GAVA</Link>,{" "}
          <Link href="#" className="font-semibold underline">HYPG</Link>.
        </p>

        <p className="mt-4">
          <strong className="text-foreground/80">
            Investing involves a high degree of risk and heightened volatility, including
            possible loss of principal. An investment is not suitable for all investors, may
            be deemed speculative and is not intended as a complete investment program. An
            investment should be considered only by persons who can bear the risk of total
            loss associated with an investment. An investment in any Grayscale product is not
            a direct investment in any cryptocurrency.
          </strong>
        </p>

        <p className="mt-4">
          <strong className="text-foreground/80">
            Carefully consider the funds&apos; investment objectives, risk factors, and charges
            and expenses before investing. This and other information can be found in the
            funds&apos; prospectuses or, if available, the summary prospectuses, which may be
            obtained by visiting Grayscale.com. Read the prospectus carefully before
            investing.
          </strong>
        </p>

        <p className="mt-4">
          This information should not be relied upon as research, investment advice, or a
          recommendation regarding any products, strategies, or any security in particular.
          This material is strictly for illustrative, educational, or informational purposes
          and is subject to change.
        </p>

        <p className="mt-4">
          Private placement securities are speculative, illiquid, and entail a high level of
          risk, including the risk that an investor could lose their entire investment. The
          private placement securities are not suitable for any investor that cannot afford
          loss of the entire investment. The private placement securities are distributed by
          Grayscale Securities, LLC (Member{" "}
          <Link href="#" className="underline">FINRA/SIPC</Link>). SIPC coverage does not
          apply to the crypto asset products or services mentioned.
        </p>

        <p className="mt-4">
          Actively managed funds do not seek to track an index and their performance reflects
          the investment decisions that the investment manager makes for the Fund. There is
          no guarantee the investment strategy will be successful.
        </p>

        <p className="mt-4">
          COINDESK&reg; is a trademark of CoinDesk Indices, Inc. (with its affiliates,
          including CC Data Limited, &ldquo;CDI&rdquo;), and/or its licensors. CDI or CDI&rsquo;s
          licensors own all proprietary rights in the Index. CDI is not affiliated with
          Grayscale and does not approve, endorse, review, or recommend any Products. CDI
          does not guarantee the timeliness, accurateness, or completeness of any data or
          information relating to any Index and shall not be liable in any way to Grayscale,
          investors in or holders of any product or other third parties in respect of the use
          or accuracy of any Index or any data included therein.
        </p>

        <p className="mt-4">
          Foreside Fund Services, LLC is the marketing agent for Grayscale ETPs and the
          distributor of Grayscale ETFs.
        </p>

        <p className="mt-4">
          All of the content on our site - including text, software, scripts, code, designs,
          graphics, photos, sounds, music, videos, applications, interactive features,
          articles, news stories, sketches, animations, stickers, general artwork and other
          content (&ldquo;Content&rdquo;) - is owned by Grayscale or others we license Content from,
          and is protected by copyright, patent and other laws.
        </p>

        <p className="mt-4">
          Grayscale reserves all rights not expressly described herein.
        </p>

        <p className="mt-4">
          &copy; 2026 Grayscale. All trademarks, service marks and/or trade names (e.g.,
          G&trade;, GRAYSCALE&reg;, GRAYSCALE CRYPTO SECTORS&trade;, and GRAYSCALE
          INVESTMENTS&reg;) are owned and/or registered by Grayscale.
        </p>
      </div>
    </footer>
  )
}
