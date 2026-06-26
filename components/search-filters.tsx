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
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-lg md:p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            Localização
          </label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Bairro, cidade ou estado"
              className="border-gray-200 pl-9 focus-visible:border-[hsl(257,36%,21%)] focus-visible:ring-[hsl(257,36%,21%)]/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            Tipo
          </label>
          <Select>
            <SelectTrigger className="border-gray-200 focus-visible:border-[hsl(257,36%,21%)] focus-visible:ring-[hsl(257,36%,21%)]/20">
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
          <label className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            Finalidade
          </label>
          <Select>
            <SelectTrigger className="border-gray-200 focus-visible:border-[hsl(257,36%,21%)] focus-visible:ring-[hsl(257,36%,21%)]/20">
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
          <label className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            Preço mínimo
          </label>
          <Select>
            <SelectTrigger className="border-gray-200 focus-visible:border-[hsl(257,36%,21%)] focus-visible:ring-[hsl(257,36%,21%)]/20">
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
          <label className="mb-1.5 block text-[11px] font-semibold tracking-widest uppercase text-gray-400">
            Quartos
          </label>
          <Select>
            <SelectTrigger className="border-gray-200 focus-visible:border-[hsl(257,36%,21%)] focus-visible:ring-[hsl(257,36%,21%)]/20">
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

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-[hsl(257,36%,21%)]">12 imóveis</span>{" "}
          encontrados
        </p>
        <Button
          onClick={handleSearch}
          className="gap-2 bg-[hsl(257,36%,21%)] px-6 text-sm tracking-wide hover:bg-[hsl(257,36%,28%)]"
        >
          <Search className="size-4" />
          Buscar
        </Button>
      </div>
    </div>
  )
}
