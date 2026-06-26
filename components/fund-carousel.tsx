"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { FundCard, type Fund } from "@/components/fund-card"

export function FundCarousel({ funds }: { funds: Fund[] }) {
  return (
    <Carousel opts={{ align: "start", dragFree: true }}>
      <CarouselContent className="-ml-2">
        {funds.map((fund) => (
          <CarouselItem key={fund.ticker} className="basis-[85%] pl-2 sm:basis-[70%]">
            <FundCard {...fund} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
