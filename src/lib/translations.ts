export type Lang = "pt" | "en";

export const WA_LUCIANO: Record<Lang, string> = {
  pt: "https://wa.me/5531996225903?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Casa%20Caldas.",
  en: "https://wa.me/5531996225903?text=Hello%2C%20I%20would%20like%20information%20about%20Casa%20Caldas.",
};

export const WA_WAGNER: Record<Lang, string> = {
  pt: "https://wa.me/5531988205150?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Casa%20Caldas.",
  en: "https://wa.me/5531988205150?text=Hello%2C%20I%20would%20like%20information%20about%20Casa%20Caldas.",
};

export const WA_URL: Record<Lang, string> = WA_LUCIANO;

export const t = {
  pt: {
    nav: {
      links: [
        { href: "#propriedade", label: "Propriedade" },
        { href: "#experiencias", label: "Experiências" },
        { href: "#galeria", label: "Galeria" },
        { href: "#tour", label: "Tour" },
        { href: "#informacoes", label: "Informações" },
        { href: "#contato", label: "Contato" },
      ],
      cta: "Agendar visita",
    },
    hero: {
      title: "Casa Caldas",
      eyebrow: "Teófilo Otoni · Minas Gerais",
      subtitle: "Casa de alto padrão à venda em Teófilo Otoni, MG.",
      facts: "5.250 m² de terreno · 1.000 m² construídos · R$ 4.100.000",
      cta: "Agendar visita privada",
      ctaWhatsapp: "Falar no WhatsApp",
      scroll: "Role para descobrir",
      imgAlt: "Fachada colonial da Casa Caldas, casa de alto padrão à venda em Teófilo Otoni, com palmeiras e jardim ao entardecer",
    },
    about: {
      eyebrow: "— Sobre a propriedade",
      heading:
        "Uma propriedade rara cercada pela natureza, combinando arquitetura colonial, privacidade e espaços desenhados para receber.",
      quote: "Uma colina, uma vista, um silêncio raro.",
      body: "Pensada para quem busca exclusividade sem ostentação, a Casa Caldas se ergue sobre uma das colinas mais privilegiadas de Teófilo Otoni. Com mais de 1.000 m² distribuídos em dois pavimentos, cada ambiente — do piso em madeira nobre às varandas panorâmicas — foi concebido para equilibrar grandiosidade e aconchego.",
      altPanorama: "Vista aérea da Casa Caldas com telhado colonial, piscina e jardins",
      altDetail: "Detalhe dos jardins tropicais",
    },
    experiences: {
      eyebrow: "— Experiências",
      heading: "Quatro maneiras de habitar a casa.",
      items: [
        {
          n: "01",
          title: "Receber",
          text: "Área gourmet integrada à piscina, varanda ampla e ambientes desenhados para acolher convidados com sofisticação.",
        },
        {
          n: "02",
          title: "Contemplar",
          text: "Vista ampla da cidade de Teófilo Otoni junto ao silêncio que é raro encontrar em meio à agitação do dia a dia.",
        },
        {
          n: "03",
          title: "Relaxar",
          text: "Sauna, piscina, spa e duchas — espaços pensados para uma rotina de descompressão completa.",
        },
        {
          n: "04",
          title: "Celebrar",
          text: "Sala de jantar formal com lustre colonial e piso em madeira nobre — um ambiente feito para receber. Mesa, cadeiras e piano não fazem parte do imóvel.",
        },
      ],
    },
    gallery: {
      eyebrow: "— Galeria",
      heading: "Galeria de Fotos.",
      description: "Da fachada noturna à vista da cidade, cada ângulo revela um detalhe da propriedade.",
      images: [
        { alt: "Vista aérea da Casa Caldas com telhado colonial, piscina e jardins, em Teófilo Otoni", caption: "Vista aérea" },
        { alt: "Piscina da Casa Caldas ao entardecer, com jardim tropical, em Teófilo Otoni", caption: "Piscina · entardecer" },
        { alt: "Piscina com jacuzzi e espreguiçadeiras ao entardecer na Casa Caldas", caption: "Piscina · jacuzzi" },
        { alt: "Área gourmet integrada à piscina, com arco colonial e jardim, na Casa Caldas", caption: "Área gourmet" },
        { alt: "Sala de jantar da Casa Caldas com lustre colonial e piso em madeira nobre", caption: "Sala de jantar" },
        { alt: "Cristaleira com peças em cristal", caption: "Cristaleira" },
        { alt: "Sala de café da manhã com mesa em madeira e paredes em mármore", caption: "Café da manhã" },
        { alt: "Sala de estar com sofás dourados e lustre de cristal", caption: "Sala de estar" },
        { alt: "Escadaria colonial com vista para o jardim", caption: "Escadaria" },
        { alt: "Jardim com caminho em pedras e buganvílias coloridas", caption: "Jardim" },
        { alt: "Varanda com pérgola e colunas de mármore", caption: "Varanda · pérgola" },
      ],
      ariaClose: "Fechar",
      ariaPrev: "Anterior",
      ariaNext: "Próxima",
      ariaImagePrefix: "Imagem",
    },
    tour: {
      eyebrow: "— Tour cinematográfico",
      heading: "Um filme sobre habitar a colina.",
      body: "",
      watch: "Assistir o filme",
      altPoster: "Tour cinematográfico da Casa Caldas",
    },
    info: {
      eyebrow: "— A propriedade",
      headingLine1: "Informações",
      headingLine2: "essenciais.",
      priceLabel: "Valor de referência",
      priceNote: "com possibilidade de negociação.",
      areaTotal: "Área total",
      areaBuilt: "Área construída",
      cta: "Conversar reservadamente",
      features: [
        "2 salas de estar",
        "5 quartos + 2 suítes",
        "4 banheiros (2 suítes + 2 sociais)",
        "2 varandas amplas",
        "Piscina, spa e duchas",
        "Sauna privativa",
        "Garagem ampla",
        "Piso em madeira nobre",
        "Adega",
        "Cozinha com churrasqueira",
        "Copa e despensa",
        "Área verde com árvores frutíferas",
        "2 mirantes",
        "Nova área de lazer em construção",
      ],
    },
    contact: {
      eyebrow: "— Contato privado",
      headingPre: "Uma visita ",
      headingEm: "silenciosa",
      headingPost: " e exclusiva.",
      locationLabel: "Localização",
      locationValue: ["Teófilo Otoni", "Minas Gerais · Brasil"],
      directLabel: "Contato direto",
      contacts: [
        { name: "Luciano", phone: "+55 (31) 99622-5903" },
        { name: "Wagner", phone: "+55 (31) 98820-5150" },
      ],
      attendanceLabel: "Atendimento",
      attendanceValue: ["Apenas com agendamento prévio.", "Atendemos com total discrição."],
    },
    faq: {
      eyebrow: "— Perguntas frequentes",
      heading: "Perguntas frequentes.",
      items: [
        {
          q: "Qual o valor da Casa Caldas?",
          a: "O valor de referência é R$ 4.100.000, com possibilidade de negociação.",
        },
        {
          q: "Qual o tamanho do imóvel?",
          a: "São 5.250 m² de terreno e 1.000 m² de área construída, distribuídos em dois pavimentos.",
        },
        {
          q: "Como agendar uma visita?",
          a: "As visitas são realizadas apenas com agendamento prévio e total discrição, pelo WhatsApp.",
        },
        {
          q: "O imóvel pode ter uso comercial?",
          a: "Sim. O terreno e a estrutura comportam usos como boutique hotel, spa, clínica premium, centro de eventos ou incorporação imobiliária.",
        },
      ],
    },
    usePotential: {
      dividerLabel: "Potencial de Uso",
      eyebrow: "— Potencial de Uso",
      heading: "Uma propriedade além da residência.",
      intro:
        "Além de uma residência exclusiva, a Casa Caldas apresenta características raras para empreendimentos de alto padrão, graças à sua localização privilegiada no topo de uma colina, vista panorâmica da cidade, ampla área verde e mais de 5.000m² de terreno.",
      parallaxAlt: "Vista panorâmica da cidade a partir da Casa Caldas",
      parallaxQuote: "Uma localização que transforma qualquer visão em possibilidade real.",
      cards: [
        {
          title: "Boutique Hotel",
          text: "Arquitetura autoral, jardins exuberantes e vista privilegiada criam o cenário ideal para uma hospedagem exclusiva e sofisticada.",
        },
        {
          title: "Spa & Bem-Estar",
          text: "Piscina, sauna, natureza e ambientes silenciosos oferecem potencial para experiências de relaxamento, wellness e longevidade.",
        },
        {
          title: "Clínica Premium",
          text: "Espaços amplos e atmosfera acolhedora ideais para clínicas de estética, medicina integrativa ou experiências de alto padrão.",
        },
        {
          title: "Centro de Eventos Privados",
          text: "Estrutura perfeita para eventos corporativos, experiências gastronômicas, exposições e encontros exclusivos.",
        },
        {
          title: "Incorporação Imobiliária",
          text: "Terreno raro em localização privilegiada com potencial para condomínio exclusivo ou empreendimento residencial de alto padrão.",
        },
      ],
      closingQuote: "Uma propriedade rara com potencial para diferentes visões de futuro.",
      cta: "Solicitar apresentação completa",
    },
    footer: {
      rights: "Todos os direitos reservados",
    },
  },
  en: {
    nav: {
      links: [
        { href: "#propriedade", label: "Property" },
        { href: "#experiencias", label: "Experiences" },
        { href: "#galeria", label: "Gallery" },
        { href: "#tour", label: "Tour" },
        { href: "#informacoes", label: "Information" },
        { href: "#contato", label: "Contact" },
      ],
      cta: "Schedule a Visit",
    },
    hero: {
      title: "Casa Caldas",
      eyebrow: "Teófilo Otoni · Minas Gerais",
      subtitle: "Luxury house for sale in Teófilo Otoni, Brazil.",
      facts: "5,250 m² plot · 1,000 m² built · R$ 4,100,000",
      cta: "Schedule a Private Visit",
      ctaWhatsapp: "Chat on WhatsApp",
      scroll: "Scroll to discover",
      imgAlt: "Colonial facade of Casa Caldas, a luxury house for sale in Teófilo Otoni, with palm trees and garden at dusk",
    },
    about: {
      eyebrow: "— About the Property",
      heading:
        "A rare property surrounded by nature, combining colonial architecture, privacy and spaces designed for entertaining.",
      quote: "A hillside, a view, a rare silence.",
      body: "Designed for those who seek exclusivity without ostentation, Casa Caldas rises on one of the most privileged hills in Teófilo Otoni. With over 1,000 m² spread across two floors, each space — from the hardwood floors to the panoramic verandas — was conceived to balance grandeur and warmth.",
      altPanorama: "Aerial view of Casa Caldas with colonial roof, pool and gardens",
      altDetail: "Detail of the tropical gardens",
    },
    experiences: {
      eyebrow: "— Experiences",
      heading: "Four ways to inhabit the house.",
      items: [
        {
          n: "01",
          title: "Entertain",
          text: "An integrated gourmet area by the pool, a spacious veranda and spaces designed to welcome guests with sophistication.",
        },
        {
          n: "02",
          title: "Contemplate",
          text: "A sweeping view of Teófilo Otoni paired with a rare silence found far from the bustle of daily life.",
        },
        {
          n: "03",
          title: "Relax",
          text: "Sauna, pool, spa and showers — spaces conceived for a complete daily decompression routine.",
        },
        {
          n: "04",
          title: "Celebrate",
          text: "Formal dining room with colonial chandelier and hardwood flooring — a space made for entertaining. Table, chairs and piano are not included in the property.",
        },
      ],
    },
    gallery: {
      eyebrow: "— Gallery",
      heading: "Photo Gallery.",
      description: "From the night facade to the city view, every angle reveals a detail of the property.",
      images: [
        { alt: "Aerial view of Casa Caldas with colonial roof, pool and gardens in Teófilo Otoni", caption: "Aerial View" },
        { alt: "Casa Caldas pool at dusk with tropical garden, Teófilo Otoni", caption: "Pool · Dusk" },
        { alt: "Pool with jacuzzi and lounge chairs at dusk", caption: "Pool · Jacuzzi" },
        { alt: "Integrated gourmet area with colonial arch and garden", caption: "Gourmet Area" },
        { alt: "Casa Caldas dining room with colonial chandelier and hardwood floor", caption: "Dining Room" },
        { alt: "Crystal display cabinet", caption: "Display Cabinet" },
        { alt: "Breakfast room with wooden table and marble walls", caption: "Breakfast Room" },
        { alt: "Living room with golden sofas and crystal chandelier", caption: "Living Room" },
        { alt: "Colonial staircase with garden view", caption: "Staircase" },
        { alt: "Garden pathway with colorful bougainvillea", caption: "Garden" },
        { alt: "Veranda with pergola and marble columns", caption: "Veranda · Pergola" },
      ],
      ariaClose: "Close",
      ariaPrev: "Previous",
      ariaNext: "Next",
      ariaImagePrefix: "Image",
    },
    tour: {
      eyebrow: "— Cinematic Tour",
      heading: "A film about living on the hill.",
      body: "",
      watch: "Watch the Film",
      altPoster: "Casa Caldas cinematic tour",
    },
    info: {
      eyebrow: "— The Property",
      headingLine1: "Essential",
      headingLine2: "Information.",
      priceLabel: "Reference Price",
      priceNote: "subject to negotiation.",
      areaTotal: "Total Area",
      areaBuilt: "Built Area",
      cta: "Speak Privately",
      features: [
        "2 living rooms",
        "5 bedrooms + 2 en-suite rooms",
        "4 bathrooms (2 en-suite + 2 guest)",
        "2 spacious verandas",
        "Pool, spa and showers",
        "Private sauna",
        "Spacious garage",
        "Hardwood flooring throughout",
        "Wine cellar",
        "Kitchen with BBQ",
        "Pantry",
        "Green area with fruit trees",
        "2 viewpoints",
        "New leisure area under construction",
      ],
    },
    contact: {
      eyebrow: "— Private Contact",
      headingPre: "A ",
      headingEm: "silent",
      headingPost: " and exclusive visit.",
      locationLabel: "Location",
      locationValue: ["Teófilo Otoni", "Minas Gerais · Brazil"],
      directLabel: "Direct Contact",
      contacts: [
        { name: "Luciano", phone: "+55 (31) 99622-5903" },
        { name: "Wagner", phone: "+55 (31) 98820-5150" },
      ],
      attendanceLabel: "Appointments",
      attendanceValue: ["By appointment only.", "We attend with complete discretion."],
    },
    faq: {
      eyebrow: "— FAQ",
      heading: "Frequently asked questions.",
      items: [
        {
          q: "What is the price of Casa Caldas?",
          a: "The reference price is R$ 4,100,000, subject to negotiation.",
        },
        {
          q: "How large is the property?",
          a: "5,250 m² of land with 1,000 m² of built area spread across two floors.",
        },
        {
          q: "How can I schedule a visit?",
          a: "Visits are by appointment only, held with complete discretion. Contact us on WhatsApp.",
        },
        {
          q: "Can the property be used commercially?",
          a: "Yes. The land and structure suit uses such as a boutique hotel, spa, premium clinic, events center or real estate development.",
        },
      ],
    },
    usePotential: {
      dividerLabel: "Use Potential",
      eyebrow: "— Use Potential",
      heading: "A property beyond residence.",
      intro:
        "Beyond an exclusive residence, Casa Caldas presents rare characteristics for premium ventures, thanks to its privileged location at the top of a hill, panoramic city view, vast green area and over 5,000m² of land.",
      parallaxAlt: "Panoramic city view from Casa Caldas",
      parallaxQuote: "A location that turns any vision into real possibility.",
      cards: [
        {
          title: "Boutique Hotel",
          text: "Distinctive architecture, lush gardens and a privileged view create the ideal setting for an exclusive and sophisticated accommodation.",
        },
        {
          title: "Spa & Wellness",
          text: "Pool, sauna, nature and quiet spaces offer potential for relaxation, wellness and longevity experiences.",
        },
        {
          title: "Premium Clinic",
          text: "Spacious rooms and a welcoming atmosphere ideal for aesthetic clinics, integrative medicine or high-end experiences.",
        },
        {
          title: "Private Events Center",
          text: "A perfect structure for corporate events, gastronomic experiences, exhibitions and exclusive gatherings.",
        },
        {
          title: "Real Estate Development",
          text: "A rare plot in a privileged location with potential for an exclusive condominium or premium residential project.",
        },
      ],
      closingQuote: "A rare property with potential for different visions of the future.",
      cta: "Request full presentation",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};
