"use client"

import { LayoutGrid, List } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ResultsHeaderProps {
  totalResults: number
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function ResultsHeader({
  totalResults,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
}: ResultsHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-lg font-semibold">
          Imóveis para{" "}
          <span className="text-muted-foreground">
            venda e aluguel em São Paulo
          </span>
        </h2>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{totalResults}</span>{" "}
          imóveis encontrados
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Tabs
          value={viewMode}
          onValueChange={(v) => onViewModeChange(v as "grid" | "list")}
        >
          <TabsList variant="line">
            <TabsTrigger value="grid">
              <LayoutGrid className="size-4" />
            </TabsTrigger>
            <TabsTrigger value="list">
              <List className="size-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Select
          value={sortBy}
          onValueChange={(value) => {
            if (value) onSortChange(value)
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Mais recentes</SelectItem>
            <SelectItem value="price-asc">Menor preço</SelectItem>
            <SelectItem value="price-desc">Maior preço</SelectItem>
            <SelectItem value="area-asc">Menor área</SelectItem>
            <SelectItem value="area-desc">Maior área</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
