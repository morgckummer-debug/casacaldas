import type { Lang } from "@/lib/translations";

export const SITE_URL = "https://casacaldas.vercel.app";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const PAGE_PATH: Record<Lang, string> = { pt: "/", en: "/en" };

export const SEO = {
  pt: {
    title: "Casa de Alto Padrão à Venda em Teófilo Otoni, MG | Casa Caldas",
    description:
      "Casa de alto padrão à venda no bairro Fátima, Teófilo Otoni, MG: 5 quartos, 1.000 m² construídos, terreno de 5.250 m², piscina e sauna. R$ 4.100.000.",
    locale: "pt_BR",
    ogImageAlt: "Fachada colonial da Casa Caldas, casa de alto padrão à venda em Teófilo Otoni",
  },
  en: {
    title: "Luxury House for Sale in Teófilo Otoni, MG, Brazil | Casa Caldas",
    description:
      "Luxury house for sale in Fátima, Teófilo Otoni, Brazil: 5 bedrooms, 1,000 m² built on a 5,250 m² plot, pool, sauna and city views. R$ 4,100,000.",
    locale: "en_US",
    ogImageAlt: "Colonial facade of Casa Caldas, a luxury house for sale in Teófilo Otoni, Brazil",
  },
} as const;

/** Meta tags + links + JSON-LD shared by the Portuguese and English pages. */
export function buildHead(lang: Lang, faq: ReadonlyArray<{ q: string; a: string }>) {
  const s = SEO[lang];
  const url = `${SITE_URL}${PAGE_PATH[lang]}`;

  const listing = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: s.title,
    url,
    description: s.description,
    inLanguage: lang === "pt" ? "pt-BR" : "en",
    image: [OG_IMAGE],
    offers: {
      "@type": "Offer",
      price: 4100000,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url,
    },
    mainEntity: {
      "@type": "SingleFamilyResidence",
      name: "Casa Caldas",
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Teófilo Otoni",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      floorSize: { "@type": "QuantitativeValue", value: 1000, unitCode: "MTK" },
      numberOfBedrooms: 5,
      numberOfBathroomsTotal: 4,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: lang === "pt" ? "Área total do terreno" : "Total plot area",
          value: 5250,
          unitCode: "MTK",
        },
      ],
      amenityFeature: (lang === "pt"
        ? ["Piscina", "Spa", "Sauna", "Adega", "Garagem", "Vista panorâmica da cidade"]
        : ["Swimming pool", "Spa", "Sauna", "Wine cellar", "Garage", "Panoramic city view"]
      ).map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang === "pt" ? "pt-BR" : "en",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Casa Caldas" },
      { property: "og:locale", content: s.locale },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: s.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: s.title },
      { name: "twitter:description", content: s.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(listing) },
      { type: "application/ld+json", children: JSON.stringify(faqPage) },
    ],
  };
}
