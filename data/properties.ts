export type PropertyType = "apartamento" | "casa" | "terreno" | "comercial"
export type PropertyPurpose = "venda" | "aluguel"
export type PropertyTag = "destaque" | "novo" | "reformado"

export interface Property {
  id: string
  title: string
  type: PropertyType
  purpose: PropertyPurpose
  tag?: PropertyTag
  price: number
  condominiumFee?: number
  iptu?: number
  address: {
    street: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
  area: number
  images: string[]
  description: string
  broker: {
    name: string
    company: string
    phone: string
  }
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento Moderno com Vista Panorâmica",
    type: "apartamento",
    purpose: "venda",
    tag: "destaque",
    price: 850000,
    condominiumFee: 1200,
    iptu: 3800,
    address: {
      street: "Av. Paulista, 1578",
      neighborhood: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      zipCode: "01310-200",
    },
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 120,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    description:
      "Magnífico apartamento localizado na mais importante avenue de São Paulo. Com acabamentos de primeria linha, varanda gourmet e vista deslumbrante da cidade.",
    broker: {
      name: "Maria Silva",
      company: "Imobiliária Central",
      phone: "(11) 99999-1234",
    },
    featured: true,
  },
  {
    id: "2",
    title: "Casa Contemporânea com Piscina",
    type: "casa",
    purpose: "venda",
    tag: "novo",
    price: 1250000,
    condominiumFee: 800,
    iptu: 5200,
    address: {
      street: "Rua dos Jardins, 450",
      neighborhood: "Jardins",
      city: "São Paulo",
      state: "SP",
      zipCode: "01408-000",
    },
    bedrooms: 4,
    bathrooms: 3,
    parkingSpaces: 3,
    area: 350,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    description:
      "Casa de alto padrão em condomínio fechado nos Jardins. Projetada por renomado arquiteto, com piscina, churrasqueira e jardim paisagístico.",
    broker: {
      name: "João Santos",
      company: "ZAP Imóveis",
      phone: "(11) 98888-5678",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Studio Mobiliado para Alugar",
    type: "apartamento",
    purpose: "aluguel",
    tag: "reformado",
    price: 2800,
    condominiumFee: 650,
    iptu: 1200,
    address: {
      street: "Rua Augusta, 2000",
      neighborhood: "Consolação",
      city: "São Paulo",
      state: "SP",
      zipCode: "01304-000",
    },
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    area: 45,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop",
    ],
    description:
      "Studio completamente mobiliado e reformado, ideal para profissionais. Próximo ao metrô e restaurants.",
    broker: {
      name: "Ana Costa",
      company: "Viva Real",
      phone: "(11) 97777-9012",
    },
  },
  {
    id: "4",
    title: "Cobertura Duplex com Terraço",
    type: "apartamento",
    purpose: "venda",
    tag: "destaque",
    price: 2100000,
    condominiumFee: 2500,
    iptu: 8500,
    address: {
      street: "Av. Brigadeiro Faria Lima, 3477",
      neighborhood: "Itaim Bibi",
      city: "São Paulo",
      state: "SP",
      zipCode: "04538-133",
    },
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 4,
    area: 280,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    description:
      "Cobertura de luxo duplex no Itaim Bibi, com terraço gourmet, piscina privativa e acabamentos importados.",
    broker: {
      name: "Carlos Oliveira",
      company: "Nobre Imóveis",
      phone: "(11) 96666-3456",
    },
    featured: true,
  },
  {
    id: "5",
    title: "Apartamento Econômico na Zona Sul",
    type: "apartamento",
    purpose: "aluguel",
    price: 1800,
    condominiumFee: 450,
    iptu: 800,
    address: {
      street: "Rua Frei Caneca, 325",
      neighborhood: "Liberdade",
      city: "São Paulo",
      state: "SP",
      zipCode: "01507-000",
    },
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 0,
    area: 65,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb7f056edc11?w=800&h=600&fit=crop",
    ],
    description:
      "Apartamento aconchegante na Liberdade, próximo ao metrô. Ideal para casais ou estudantes.",
    broker: {
      name: "Fernanda Lima",
      company: "Conecta Imóveis",
      phone: "(11) 95555-7890",
    },
  },
  {
    id: "6",
    title: "Casa de Campo com Área Verde",
    type: "casa",
    purpose: "venda",
    price: 680000,
    address: {
      street: "Estrada do Sol, 1200",
      neighborhood: "Alto da Serra",
      city: "Santo André",
      state: "SP",
      zipCode: "09190-000",
    },
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 200,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    ],
    description:
      "Casa de campo cercada por verde, com ampla área de lazer. Perfeita para quem busca tranquilidade.",
    broker: {
      name: "Roberto Almeida",
      company: "Serra Imóveis",
      phone: "(11) 94444-2345",
    },
  },
  {
    id: "7",
    title: "Loft Industrial no Barro Branco",
    type: "comercial",
    purpose: "aluguel",
    tag: "novo",
    price: 4500,
    condominiumFee: 900,
    iptu: 2000,
    address: {
      street: "Rua Clélia, 93",
      neighborhood: "Barro Branco",
      city: "São Paulo",
      state: "SP",
      zipCode: "01218-010",
    },
    bedrooms: 0,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 180,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    ],
    description:
      "Espaço loft com pé-direito alto e estrutura industrial. Ideal para escritórios criativos e agências.",
    broker: {
      name: "Patricia Mendes",
      company: "Space Comercial",
      phone: "(11) 93333-6789",
    },
  },
  {
    id: "8",
    title: "Apartamento Compacto para Investimento",
    type: "apartamento",
    purpose: "venda",
    price: 320000,
    condominiumFee: 380,
    iptu: 900,
    address: {
      street: "Rua Galvão Bueno, 456",
      neighborhood: "Liberdade",
      city: "São Paulo",
      state: "SP",
      zipCode: "01506-000",
    },
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 0,
    area: 35,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=800&h=600&fit=crop",
    ],
    description:
      "Apartamento compacto com ótimo retorno de aluguel. Próximo ao metrô da Liberdade.",
    broker: {
      name: "Lucas Ferreira",
      company: "Invest Imóveis",
      phone: "(11) 92222-0123",
    },
  },
  {
    id: "9",
    title: "Sobrado com 5 Quartos em Condomínio",
    type: "casa",
    purpose: "venda",
    tag: "destaque",
    price: 1890000,
    condominiumFee: 1500,
    iptu: 7200,
    address: {
      street: "Rua do Porto, 780",
      neighborhood: "Morumbi",
      city: "São Paulo",
      state: "SP",
      zipCode: "05711-000",
    },
    bedrooms: 5,
    bathrooms: 4,
    parkingSpaces: 4,
    area: 450,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
    ],
    description:
      "Sobrado imponente em condomínio fechado no Morumbi. Com quadra de tênis, playground e segurança 24h.",
    broker: {
      name: "Mariana Rocha",
      company: "Morumbi Imóveis",
      phone: "(11) 91111-4567",
    },
    featured: true,
  },
  {
    id: "10",
    title: "Salão Comercial na Radial Leste",
    type: "comercial",
    purpose: "aluguel",
    price: 3200,
    address: {
      street: "Av. Radial Leste, 5000",
      neighborhood: "Tatuapé",
      city: "São Paulo",
      state: "SP",
      zipCode: "03500-000",
    },
    bedrooms: 0,
    bathrooms: 1,
    parkingSpaces: 1,
    area: 100,
    images: [
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    ],
    description:
      "Salão comercial com ampla vitrine, ideal para loja ou clínica. Localização privilegiada na Radial.",
    broker: {
      name: "Paulo Henrique",
      company: "Tatuapé Negócios",
      phone: "(11) 90000-8901",
    },
  },
  {
    id: "11",
    title: "Terreno em Condomínio Fechado",
    type: "terreno",
    purpose: "venda",
    price: 450000,
    iptu: 2800,
    address: {
      street: "Estrada Velha de Suzano, 2300",
      neighborhood: "Jardim das Flores",
      city: "Suzano",
      state: "SP",
      zipCode: "08675-000",
    },
    bedrooms: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    area: 500,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    ],
    description:
      "Terreno plano em condomínio fechado com infraestrutura pronta. Ideal para construção da casa dos sonhos.",
    broker: {
      name: "Antônio Marcos",
      company: "Suzano Imóveis",
      phone: "(11) 98888-2345",
    },
  },
  {
    id: "12",
    title: "Apartamento de Luxo com Spa Privativo",
    type: "apartamento",
    purpose: "venda",
    tag: "novo",
    price: 3500000,
    condominiumFee: 4500,
    iptu: 15000,
    address: {
      street: "Rua Oscar Freire, 900",
      neighborhood: "Jardim Paulista",
      city: "São Paulo",
      state: "SP",
      zipCode: "01426-001",
    },
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 5,
    area: 400,
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18d6885e6?w=800&h=600&fit=crop",
    ],
    description:
      "Apartamento de alto padrão na região mais nobre de SP. Com spa privativo, academia e salão de festas.",
    broker: {
      name: "Isabela Fernandes",
      company: "Alta Imobiliária",
      phone: "(11) 97777-6789",
    },
    featured: true,
  },
]

export function formatPrice(value: number, purpose: PropertyPurpose): string {
  const formatted = value.toLocaleString("pt-BR")
  if (purpose === "aluguel") {
    return `R$ ${formatted}/mês`
  }
  return `R$ ${formatted}`
}

export function formatArea(value: number): string {
  return `${value} m²`
}
