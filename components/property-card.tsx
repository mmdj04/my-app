"use client"

import { useState } from "react"
import { Heart, BedDouble, Bath, Car, Maximize2, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Property } from "@/data/properties"
import { formatPrice, formatArea } from "@/data/properties"

interface PropertyCardProps {
  property: Property
  className?: string
}

const tagStyles: Record<string, string> = {
  destaque: "bg-yellow-500 text-white hover:bg-yellow-600",
  novo: "bg-[#2e234a] text-white hover:bg-[#3d2f5e]",
  reformado: "bg-blue-500 text-white hover:bg-blue-600",
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    )
  }

  return (
    <Card className={cn("group overflow-hidden", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[currentImage]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {property.tag && (
          <Badge
            className={cn(
              "absolute top-2 left-2 z-10 text-xs font-semibold",
              tagStyles[property.tag]
            )}
          >
            {property.tag.charAt(0).toUpperCase() + property.tag.slice(1)}
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 size-8 rounded-full bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={cn("size-4", isFavorite && "fill-red-500 text-red-500")}
          />
        </Button>

        {property.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 z-10 size-6 -translate-y-1/2 rounded-full bg-white/80 text-gray-600 hover:bg-white"
              onClick={prevImage}
            >
              ‹
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 z-10 size-6 -translate-y-1/2 rounded-full bg-white/80 text-gray-600 hover:bg-white"
              onClick={nextImage}
            >
              ›
            </Button>
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
              {property.images.map((_, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    idx === currentImage
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                  onClick={() => setCurrentImage(idx)}
                  aria-label={`Imagem ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <CardContent className="space-y-2 pt-3">
        <div className="flex items-start justify-between">
          <h3 className="line-clamp-2 text-base font-semibold leading-tight">
            {property.title}
          </h3>
        </div>

        <p className="text-xl font-bold text-[#2e234a]">
          {formatPrice(property.price, property.purpose)}
        </p>

        {property.purpose === "venda" && property.condominiumFee && (
          <p className="text-xs text-muted-foreground">
            Condomínio: R$ {property.condominiumFee.toLocaleString("pt-BR")}/mês
          </p>
        )}

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" />
          <span className="line-clamp-1">
            {property.address.neighborhood}, {property.address.city} -{" "}
            {property.address.state}
          </span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <BedDouble className="size-4 text-muted-foreground" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <Bath className="size-4 text-muted-foreground" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          {property.parkingSpaces > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <Car className="size-4 text-muted-foreground" />
              <span>{property.parkingSpaces}</span>
            </div>
          )}
          {property.area > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <Maximize2 className="size-4 text-muted-foreground" />
              <span>{formatArea(property.area)}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t bg-[#ededed] pt-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
            {property.broker.name.charAt(0)}
          </div>
          <div className="text-xs">
            <p className="font-medium">{property.broker.name}</p>
            <p className="text-muted-foreground">{property.broker.company}</p>
          </div>
        </div>
        <Button size="sm" variant="outline" className="gap-1">
          <Phone className="size-3" />
          Contato
        </Button>
      </CardFooter>
    </Card>
  )
}
