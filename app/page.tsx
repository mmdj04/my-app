import { ChevronRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const funds = {
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

function FundCard({ ticker, name, price }: { ticker: string; name: string; price: string }) {
  return (
    <Card className="group cursor-pointer border-border/50 bg-white transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-bold tracking-tight">{ticker}</CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-[160px] flex-col justify-between">
        <p className="text-sm text-muted-foreground">{name}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-semibold">{price}</p>
            <p className="text-xs text-muted-foreground">
              Market Price as of 06/25/2026
            </p>
          </div>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  return (
    <>
      <section className="flex min-h-svh items-center justify-center">
        <h1 className="text-6xl font-bold uppercase tracking-widest sm:text-8xl">
          Grayscale<span className="text-lg align-top">&reg;</span>
        </h1>
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {funds.etfs.map((fund) => (
                <FundCard key={fund.ticker} {...fund} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publiclyTraded">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {funds.publiclyTraded.map((fund) => (
                <FundCard key={fund.ticker} {...fund} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="privateFunds">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {funds.privateFunds.map((fund) => (
                <FundCard key={fund.ticker} {...fund} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
