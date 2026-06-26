"use client"

import { useState } from "react"
import { Heart, BedDouble, Bath, Car, Maximize2, MapPin, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Property } from "@/data/properties"
import { formatPrice, formatArea } from "@/data/properties"

interface PropertyCardProps {
  property: Property
  className?: string
}

const tagStyles: Record<string, string> = {
  destaque: "bg-[#2e234a] text-white",
  novo: "bg-[#2e234a] text-white",
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div
      className={cn(
        "group flex flex-row items-center overflow-hidden rounded-xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        {property.tag && (
          <Badge
            className={cn(
              "mb-1 w-fit text-[10px] font-semibold tracking-wide",
              tagStyles[property.tag]
            )}
          >
            {property.tag === "destaque" ? "Destaque" : "Novo"}
          </Badge>
        )}

        <h3 className="text-base font-semibold leading-snug tracking-tight">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-400">
          <MapPin className="size-3.5 shrink-0" />
          <span className="line-clamp-1">
            {property.address.neighborhood}, {property.address.city}
          </span>
        </div>

        <p className="mt-1 text-2xl font-semibold tracking-tight text-[#2e234a]">
          {formatPrice(property.price, property.purpose)}
        </p>

        <div className="mt-1.5 flex items-center gap-3 text-xs text-gray-400">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <BedDouble className="size-3.5" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="size-3.5" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          {property.parkingSpaces > 0 && (
            <div className="flex items-center gap-1">
              <Car className="size-3.5" />
              <span>{property.parkingSpaces}</span>
            </div>
          )}
          {property.area > 0 && (
            <div className="flex items-center gap-1">
              <Maximize2 className="size-3.5" />
              <span>{formatArea(property.area)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative flex shrink-0 items-center gap-2 pr-4">
        <div className="relative size-28 overflow-hidden rounded-lg sm:size-32 md:size-36">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-cover object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1.5 right-1.5 size-7 rounded-full bg-white/90 text-gray-400 shadow-sm hover:bg-white hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
          >
            <Heart
              className={cn(
                "size-3.5",
                isFavorite && "fill-red-500 text-red-500"
              )}
            />
          </Button>
        </div>
        <ChevronRight className="size-5 shrink-0 text-gray-300 transition-colors group-hover:text-[#2e234a]" />
      </div>
    </div>
  )
}
