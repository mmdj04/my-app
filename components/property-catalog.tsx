"use client"

import { useState, useMemo } from "react"
import {
  Home,
  Building2,
  LandPlot,
  Briefcase,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { ResultsHeader } from "@/components/results-header"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { properties, type Property } from "@/data/properties"

function sortProperties(items: Property[], sortBy: string): Property[] {
  const sorted = [...items]
  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "area-asc":
      return sorted.sort((a, b) => a.area - b.area)
    case "area-desc":
      return sorted.sort((a, b) => b.area - a.area)
    case "recent":
    default:
      return sorted
  }
}

export function PropertyCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemsPerPage = 6

  const sortedProperties = useMemo(
    () => sortProperties(properties, sortBy),
    [sortBy]
  )

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)
  const paginatedProperties = sortedProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
              IC
            </div>
            <span className="text-xl font-bold text-emerald-600">
              ImóveisCatálogo
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" className="gap-2">
              <Building2 className="size-4" />
              Comprar
            </Button>
            <Button variant="ghost" className="gap-2">
              <Home className="size-4" />
              Alugar
            </Button>
            <Button variant="ghost" className="gap-2">
              <LandPlot className="size-4" />
              Terrenos
            </Button>
            <Button variant="ghost" className="gap-2">
              <Briefcase className="size-4" />
              Comercial
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button className="hidden sm:inline-flex">Cadastrar</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t bg-white px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-2">
                <Building2 className="size-4" />
                Comprar
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <Home className="size-4" />
                Alugar
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <LandPlot className="size-4" />
                Terrenos
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <Briefcase className="size-4" />
                Comercial
              </Button>
              <hr className="my-2" />
              <Button variant="outline" className="justify-start">
                Entrar
              </Button>
              <Button className="justify-start">Cadastrar</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 to-emerald-900 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            Encontre o imóvel dos seus sonhos
          </h1>
          <p className="mb-8 text-lg text-emerald-100">
            Milhares de opções de apartamentos, casas e terrenos em todo o
            Brasil
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="size-5 text-emerald-200" />
              <span className="text-sm text-emerald-100">
                São Paulo, Rio de Janeiro, Belo Horizonte e mais...
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
        <div className="-mt-16 relative z-10 mb-8">
          <SearchFilters />
        </div>

        <div className="space-y-6">
          <ResultsHeader
            totalResults={sortedProperties.length}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Property Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-4"
            }
          >
            {paginatedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                className={viewMode === "list" ? "md:flex-row" : ""}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      text="Anterior"
                      onClick={() =>
                        setCurrentPage((p) => Math.max(1, p - 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={page === currentPage}
                          onClick={() => setCurrentPage(page)}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      text="Próximo"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
                  IC
                </div>
                <span className="text-lg font-bold text-emerald-600">
                  ImóveisCatálogo
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                O melhor portal de imóveis do Brasil. Encontre sua casa dos
                sonhos.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Comprar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground">
                  <a href="#">Apartamentos</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Casas</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Terrenos</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Comerciais</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Alugar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground">
                  <a href="#">Apartamentos</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Casas</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Salas Comerciais</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Lofts</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground">
                  <a href="#">Sobre nós</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Contato</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Termos de uso</a>
                </li>
                <li className="hover:text-foreground">
                  <a href="#">Política de privacidade</a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>&copy; 2026 ImóveisCatálogo. Todos os direitos reservados.</p>
            <p>Feito com ❤️ no Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
