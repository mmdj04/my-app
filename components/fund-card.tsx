import { ChevronRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type Fund = {
  ticker: string
  name: string
  price: string
}

export function FundCard({ ticker, name, price }: Fund) {
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
