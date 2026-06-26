"use client"

import { useState } from "react"
import { Heart, BedDouble, Bath, Car, Maximize2, MapPin, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Property } from "@/data/properties"
import { formatPrice, formatArea } from "@/data/properties"

interface PropertyCardProps {
  property: Property
  className?: string
}

const tagStyles: Record<string, string> = {
  destaque: "bg-yellow-500 text-white",
  novo: "bg-[#2e234a] text-white",
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card
      className={cn(
        "group relative flex flex-row items-center overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <CardContent className="flex flex-1 items-center justify-between p-4">
        <div className="flex flex-1 flex-col gap-1 pr-4">
          {property.tag && (
            <Badge
              className={cn(
                "mb-1 w-fit text-[10px] font-semibold",
                tagStyles[property.tag]
              )}
            >
              {property.tag === "destaque" ? "Destaque" : "Novo"}
            </Badge>
          )}

          <h3 className="text-base font-semibold leading-snug">
            {property.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {property.address.neighborhood}, {property.address.city}
          </p>

          <p className="mt-1 text-xl font-bold text-[#2e234a]">
            {formatPrice(property.price, property.purpose)}
          </p>

          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-0.5">
                <BedDouble className="size-3.5" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-0.5">
                <Bath className="size-3.5" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            {property.parkingSpaces > 0 && (
              <div className="flex items-center gap-0.5">
                <Car className="size-3.5" />
                <span>{property.parkingSpaces}</span>
              </div>
            )}
            {property.area > 0 && (
              <div className="flex items-center gap-0.5">
                <Maximize2 className="size-3.5" />
                <span>{formatArea(property.area)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="relative flex shrink-0 items-center gap-2">
          <div className="relative size-24 overflow-hidden rounded-lg sm:size-28 md:size-32">
            <img
              src={property.images[0]}
              alt={property.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 size-6 rounded-full bg-white/80 text-gray-500 hover:bg-white hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation()
                setIsFavorite(!isFavorite)
              }}
            >
              <Heart
                className={cn(
                  "size-3",
                  isFavorite && "fill-red-500 text-red-500"
                )}
              />
            </Button>
          </div>
          <ChevronRight className="size-5 shrink-0 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  )
}
