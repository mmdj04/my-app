"use client"

import { useState } from "react"
import { Heart, BedDouble, Bath, Car, Maximize2, MapPin } from "lucide-react"
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
    <Card className={cn("group overflow-hidden border-0 shadow-md", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {property.tag && (
          <Badge
            className={cn(
              "absolute top-2 left-2 z-10 text-[10px] font-semibold",
              tagStyles[property.tag]
            )}
          >
            {property.tag === "destaque" ? "Destaque" : "Novo"}
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 size-7 rounded-full bg-white/80 text-gray-500 hover:bg-white hover:text-red-500"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={cn("size-3.5", isFavorite && "fill-red-500 text-red-500")}
          />
        </Button>
      </div>

      <CardContent className="space-y-1.5 p-3">
        <p className="text-lg font-bold text-[#2e234a]">
          {formatPrice(property.price, property.purpose)}
        </p>

        <h3 className="line-clamp-1 text-sm font-medium">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3 shrink-0" />
          <span className="line-clamp-1">
            {property.address.neighborhood}, {property.address.city}
          </span>
        </div>

        <div className="flex items-center gap-2.5 pt-0.5 text-xs text-muted-foreground">
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
      </CardContent>
    </Card>
  )
}
