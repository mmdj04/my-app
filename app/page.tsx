import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FundCarousel } from "@/components/fund-carousel"
import { FundCard, type Fund } from "@/components/fund-card"

const funds: Record<string, Fund[]> = {
  etfs: [
    { ticker: "BTC", name: "Grayscale Bitcoin Mini Trust ETF", price: "$26.18" },
    { ticker: "ETH", name: "Grayscale Ethereum Staking Mini ETF", price: "$14.80" },
    { ticker: "HYPG", name: "Grayscale Hyperliquid Staking ETF", price: "$22.40" },
    { ticker: "GSOL", name: "Grayscale Solana Staking ETF", price: "$4.96" },
    { ticker: "GLNK", name: "Grayscale Chainlink Trust ETF", price: "$6.35" },
    { ticker: "GXRP", name: "Grayscale XRP Trust ETF", price: "$20.03" },
  ],
  publiclyTraded: [
    { ticker: "GBTC", name: "Grayscale Bitcoin Trust", price: "$52.40" },
    { ticker: "ETHE", name: "Grayscale Ethereum Trust", price: "$28.15" },
    { ticker: "GMIN", name: "Grayscale Mini Bitcoin ETF", price: "$26.20" },
  ],
  privateFunds: [
    { ticker: "GPIP", name: "Grayscale Private Investment Fund", price: "$100.00" },
    { ticker: "GDEF", name: "Grayscale DeFi Fund", price: "$45.75" },
  ],
}

function FundGrid({ items }: { items: Fund[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {items.map((fund) => (
        <FundCard key={fund.ticker} {...fund} />
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center bg-[oklch(0.205_0_0)] px-6 py-16 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-violet-900/30" />
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Digital Asset Investing Fundamentals Course
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Master the foundations of investing in crypto assets with
            Grayscale&apos;s five-class, CE-credit course.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="uppercase tracking-wider">
              Class 2: Register Now
            </Button>
            <Button size="lg" variant="outline" className="uppercase tracking-wider border-white/30 text-white hover:bg-white/10">
              See Syllabus
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
          Investment Solutions
        </h2>

        <Tabs defaultValue="etfs">
          <TabsList variant="line" className="mb-8 border-b">
            <TabsTrigger value="etfs" className="uppercase text-xs tracking-wider">
              ETFs/ETPs
            </TabsTrigger>
            <TabsTrigger value="publiclyTraded" className="uppercase text-xs tracking-wider">
              Publicly Traded Funds
            </TabsTrigger>
            <TabsTrigger value="privateFunds" className="uppercase text-xs tracking-wider">
              Private Funds
            </TabsTrigger>
          </TabsList>

          <TabsContent value="etfs">
            <div className="lg:hidden">
              <FundCarousel funds={funds.etfs} />
            </div>
            <div className="hidden lg:block">
              <FundGrid items={funds.etfs} />
            </div>
          </TabsContent>

          <TabsContent value="publiclyTraded">
            <div className="lg:hidden">
              <FundCarousel funds={funds.publiclyTraded} />
            </div>
            <div className="hidden lg:block">
              <FundGrid items={funds.publiclyTraded} />
            </div>
          </TabsContent>

          <TabsContent value="privateFunds">
            <div className="lg:hidden">
              <FundCarousel funds={funds.privateFunds} />
            </div>
            <div className="hidden lg:block">
              <FundGrid items={funds.privateFunds} />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
