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

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Casa Caldas — Exclusive Property in Teófilo Otoni, MG" },
      {
        name: "description",
        content:
          "Contemporary colonial architecture, mature tropical gardens and a privileged city view. A rare property in Teófilo Otoni, Minas Gerais.",
      },
      { property: "og:title", content: "Casa Caldas — Exclusive Property in Teófilo Otoni" },
      {
        property: "og:description",
        content: "Architecture, nature and privacy on a rare hillside in Minas Gerais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en" },
      { rel: "alternate", hrefLang: "pt", href: "/" },
    ],
  }),
  component: IndexEn,
});

function IndexEn() {
  return (
    <main className="bg-background text-ink overflow-x-hidden">
      <Nav lang="en" />
      <Hero lang="en" />
      <About lang="en" />
      <Experiences lang="en" />
      <Gallery lang="en" />
      {/* <Tour lang="en" /> */}
      <Info lang="en" />
      <UsePotential lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
      <WhatsAppFloat lang="en" />
    </main>
  );
}
