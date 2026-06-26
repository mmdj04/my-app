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
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import { properties, type Property } from "@/data/properties"

function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex items-center justify-between pt-6">
      <div className="flex gap-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="flex size-11 items-center justify-center border border-gray-300 bg-transparent text-gray-400 transition-colors hover:border-[#2e234a] hover:text-[#2e234a] disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-400"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="flex size-11 items-center justify-center border border-gray-300 bg-transparent text-gray-400 transition-colors hover:border-[#2e234a] hover:text-[#2e234a] disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-400"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <Button className="gap-2 bg-[#2e234a] px-6 text-sm tracking-wide text-white hover:bg-[#3d2f5e]">
        Ver todos
        <ArrowRight className="size-4" />
      </Button>
    </div>
  )
}

type TabType = "venda" | "aluguel" | "comercial"

export function PropertyCatalog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("venda")

  const filteredProperties = properties.filter((p) => {
    if (activeTab === "venda") return p.purpose === "venda"
    if (activeTab === "aluguel") return p.purpose === "aluguel"
    return p.type === "comercial"
  })

  const tabs: { label: string; value: TabType }[] = [
    { label: "Venda", value: "venda" },
    { label: "Aluguel", value: "aluguel" },
    { label: "Comercial", value: "comercial" },
  ]

  const stats = [
    { number: "4.500+", label: "Imóveis disponíveis" },
    { number: "120+", label: "Cidades atendidas" },
    { number: "98%", label: "Clientes satisfeitos" },
    { number: "15+", label: "Anos de experiência" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-[#1a1432] py-2 text-[11px] tracking-widest text-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4">
          <a href="#" className="transition-colors hover:text-white">Contato</a>
          <a href="#" className="transition-colors hover:text-white">Sobre</a>
          <a href="#" className="transition-colors hover:text-white">Anunciar</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2e234a]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#2e234a]">
              IC
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              ImóveisCatálogo
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" className="gap-2 text-white/80 hover:bg-white/10 hover:text-white">
              <Building2 className="size-4" />
              Comprar
            </Button>
            <Button variant="ghost" className="gap-2 text-white/80 hover:bg-white/10 hover:text-white">
              <Home className="size-4" />
              Alugar
            </Button>
            <Button variant="ghost" className="gap-2 text-white/80 hover:bg-white/10 hover:text-white">
              <LandPlot className="size-4" />
              Terrenos
            </Button>
            <Button variant="ghost" className="gap-2 text-white/80 hover:bg-white/10 hover:text-white">
              <Briefcase className="size-4" />
              Comercial
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden border-white/40 text-white hover:bg-white hover:text-[#2e234a] sm:inline-flex"
            >
              Entrar
            </Button>
            <Button className="hidden bg-white text-[#2e234a] hover:bg-white/90 sm:inline-flex">
              Cadastrar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#2e234a] px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-3 text-white hover:bg-white/10 hover:text-white">
                <Building2 className="size-4" /> Comprar
              </Button>
              <Button variant="ghost" className="justify-start gap-3 text-white hover:bg-white/10 hover:text-white">
                <Home className="size-4" /> Alugar
              </Button>
              <Button variant="ghost" className="justify-start gap-3 text-white hover:bg-white/10 hover:text-white">
                <LandPlot className="size-4" /> Terrenos
              </Button>
              <Button variant="ghost" className="justify-start gap-3 text-white hover:bg-white/10 hover:text-white">
                <Briefcase className="size-4" /> Comercial
              </Button>
              <hr className="my-2 border-white/20" />
              <Button variant="outline" className="justify-start border-white/40 text-white hover:bg-white hover:text-[#2e234a]">
                Entrar
              </Button>
              <Button className="justify-start bg-white text-[#2e234a] hover:bg-white/90">Cadastrar</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2e234a] to-[#1a1432] py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 size-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 size-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl leading-[1.05] font-light tracking-tight md:text-7xl">
              Encontre o imóvel
              <br />
              <span className="font-semibold">dos seus sonhos</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-white/70">
              Milhares de opções de apartamentos, casas e terrenos nas melhores
              localizações do Brasil.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white px-8 py-6 text-sm font-semibold tracking-wide text-[#2e234a] hover:bg-white/90">
                Comprar
              </Button>
              <Button
                variant="outline"
                className="border-white/40 px-8 py-6 text-sm font-semibold tracking-wide text-white hover:bg-white/10 hover:text-white"
              >
                Alugar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="-mt-10 relative z-10 mb-12">
          <SearchFilters />
        </div>
      </div>

      {/* Property Carousel Section */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-2 text-3xl font-light tracking-tight md:text-4xl">
            Nossos Imóveis
          </h2>

          {/* Tabs */}
          <div className="mb-8 flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative pb-4 text-sm font-semibold tracking-wide uppercase transition-colors ${
                  activeTab === tab.value
                    ? "text-[#2e234a]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.value && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#2e234a]" />
                )}
              </button>
            ))}
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {filteredProperties.map((property) => (
                <CarouselItem
                  key={property.id}
                  className="basis-[85vw] pl-3 sm:basis-[45vw] lg:basis-[30vw]"
                >
                  <PropertyCard property={property} className="h-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselControls />
          </Carousel>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="mb-2 text-4xl font-light tracking-tight text-[#2e234a] md:text-5xl">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2e234a] to-[#1a1432] py-20 text-white">
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-10">
          <div className="absolute top-1/4 right-1/4 size-80 rotate-45 border border-white/30" />
          <div className="absolute top-1/3 right-1/3 size-60 rotate-12 border border-white/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-light tracking-tight md:text-5xl">
            Próximo passo?
          </h2>
          <p className="mb-8 text-lg text-white/70">
            Fale com um dos nossos especialistas e encontre o imóvel perfeito.
          </p>
          <Button
            variant="outline"
            className="border-white px-10 py-6 text-sm font-semibold tracking-wide text-white hover:bg-white hover:text-[#2e234a]"
          >
            Fale conosco
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f7f7f7] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#2e234a] text-sm font-bold text-white">
              IC
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#2e234a]">
              ImóveisCatálogo
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="max-w-xs">
              <p className="text-sm leading-relaxed text-gray-500">
                O melhor portal de imóveis do Brasil. Encontre sua casa dos
                sonhos com segurança e facilidade.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-[#2e234a]">
                Comprar
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Apartamentos</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Casas</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Terrenos</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Comerciais</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-[#2e234a]">
                Alugar
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Apartamentos</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Casas</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Salas Comerciais</a></li>
                <li><a href="#" className="transition-colors hover:text-[#2e234a]">Lofts</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-[#2e234a]">
                Contato
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Phone className="size-3.5" /> (11) 99999-0000
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-3.5" /> contato@imovelcatalogo.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPinned className="size-3.5" /> São Paulo, SP
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
            <p>&copy; 2026 ImóveisCatálogo. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-[#2e234a]">Termos de uso</a>
              <a href="#" className="transition-colors hover:text-[#2e234a]">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
