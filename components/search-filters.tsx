"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface SearchFiltersProps {
  onSearch?: (filters: {
    location: string
    type: string
    purpose: string
    minPrice: string
    maxPrice: string
    bedrooms: string
  }) => void
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const handleSearch = () => {
    onSearch?.({
      location: "",
      type: "",
      purpose: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
    })
  }

  return (
    <div className="w-full rounded-xl bg-[#ededed] p-4 shadow-lg ring-1 ring-black/5 md:p-6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Localização
          </label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Bairro, cidade ou estado"
              className="pl-9"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Tipo de imóvel
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Finalidade
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="venda">Venda</SelectItem>
              <SelectItem value="aluguel">Aluguel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Preço mínimo
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Min" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Sem mínimo</SelectItem>
              <SelectItem value="100000">R$ 100.000</SelectItem>
              <SelectItem value="200000">R$ 200.000</SelectItem>
              <SelectItem value="300000">R$ 300.000</SelectItem>
              <SelectItem value="500000">R$ 500.000</SelectItem>
              <SelectItem value="1000000">R$ 1.000.000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Quartos
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Qualquer</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">12 imóveis</span>{" "}
          encontrados
        </p>
        <Button onClick={handleSearch} className="gap-2">
          <Search className="size-4" />
          Buscar imóveis
        </Button>
      </div>
    </div>
  )
}
