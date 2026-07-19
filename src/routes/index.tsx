import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/casa/Nav";
import { Hero } from "@/components/casa/Hero";
import { About } from "@/components/casa/About";
import { Experiences } from "@/components/casa/Experiences";
import { Gallery } from "@/components/casa/Gallery";
import { Tour } from "@/components/casa/Tour";
import { Info } from "@/components/casa/Info";
import { UsePotential } from "@/components/casa/UsePotential";
import { Contact } from "@/components/casa/Contact";
import { Footer } from "@/components/casa/Footer";
import { WhatsAppFloat } from "@/components/casa/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Caldas — Propriedade exclusiva em Teófilo Otoni, MG" },
      {
        name: "description",
        content:
          "Arquitetura colonial contemporânea, jardins tropicais maduros e vista privilegiada da cidade. Uma propriedade rara em Teófilo Otoni, Minas Gerais.",
      },
      { property: "og:title", content: "Casa Caldas — Propriedade exclusiva em Teófilo Otoni" },
      {
        property: "og:description",
        content: "Arquitetura, natureza e privacidade em uma colina rara de Minas Gerais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-ink overflow-x-hidden">
      <Nav lang="pt" />
      <Hero lang="pt" />
      <About lang="pt" />
      <Experiences lang="pt" />
      <Gallery lang="pt" />
      <Tour lang="pt" />
      <Info lang="pt" />
      <UsePotential lang="pt" />
      <Contact lang="pt" />
      <Footer lang="pt" />
      <WhatsAppFloat lang="pt" />
    </main>
  );
}
