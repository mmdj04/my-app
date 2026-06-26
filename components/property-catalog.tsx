"use client"

import { useState } from "react"
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { properties } from "@/data/properties"

export function PropertyCatalog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2e234a] shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
              <Building2 className="size-4" />
              Comprar
            </Button>
            <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
              <Home className="size-4" />
              Alugar
            </Button>
            <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
              <LandPlot className="size-4" />
              Terrenos
            </Button>
            <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
              <Briefcase className="size-4" />
              Comercial
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden border-white/30 text-white hover:bg-white/10 hover:text-white sm:inline-flex">
              Entrar
            </Button>
            <Button className="hidden bg-white text-[#2e234a] hover:bg-white/90 sm:inline-flex">Cadastrar</Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 md:hidden"
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
          <div className="border-t border-white/10 bg-[#2e234a] px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-white/10 hover:text-white">
                <Building2 className="size-4" />
                Comprar
              </Button>
              <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-white/10 hover:text-white">
                <Home className="size-4" />
                Alugar
              </Button>
              <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-white/10 hover:text-white">
                <LandPlot className="size-4" />
                Terrenos
              </Button>
              <Button variant="ghost" className="justify-start gap-2 text-white hover:bg-white/10 hover:text-white">
                <Briefcase className="size-4" />
                Comercial
              </Button>
              <hr className="my-2 border-white/20" />
              <Button variant="outline" className="justify-start border-white/30 text-white hover:bg-white/10 hover:text-white">
                Entrar
              </Button>
              <Button className="justify-start bg-white text-[#2e234a] hover:bg-white/90">Cadastrar</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2e234a] to-[#1a1432] py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            Encontre o imóvel dos seus sonhos
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Milhares de opções de apartamentos, casas e terrenos em todo o
            Brasil
          </p>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="size-5 text-white/70" />
              <span className="text-sm text-white/80">
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

        {/* Featured Carousel */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Destaques</h2>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {properties.map((property) => (
                  <CarouselItem
                    key={property.id}
                    className="basis-[85vw] pl-3 sm:basis-[45vw] lg:basis-[30vw]"
                  >
                    <PropertyCard property={property} className="h-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-9 -translate-x-1/2 border-0 bg-[#2e234a] text-white shadow-lg hover:bg-[#3d2f5e]" />
              <CarouselNext className="right-0 size-9 translate-x-1/2 border-0 bg-[#2e234a] text-white shadow-lg hover:bg-[#3d2f5e]" />
            </Carousel>
          </div>
        </section>

        {/* All Properties Carousel */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Todos os Imóveis</h2>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {[...properties].reverse().map((property) => (
                  <CarouselItem
                    key={property.id}
                    className="basis-[85vw] pl-3 sm:basis-[45vw] lg:basis-[30vw]"
                  >
                    <PropertyCard property={property} className="h-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 size-9 -translate-x-1/2 border-0 bg-[#2e234a] text-white shadow-lg hover:bg-[#3d2f5e]" />
              <CarouselNext className="right-0 size-9 translate-x-1/2 border-0 bg-[#2e234a] text-white shadow-lg hover:bg-[#3d2f5e]" />
            </Carousel>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-[#ededed]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
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
