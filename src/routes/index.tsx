import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/casa/Nav";
import { Hero } from "@/components/casa/Hero";
import { About } from "@/components/casa/About";
import { Experiences } from "@/components/casa/Experiences";
import { Gallery } from "@/components/casa/Gallery";
import { Tour } from "@/components/casa/Tour";
import { Info } from "@/components/casa/Info";
import { UsePotential } from "@/components/casa/UsePotential";
import { Faq } from "@/components/casa/Faq";
import { Contact } from "@/components/casa/Contact";
import { Footer } from "@/components/casa/Footer";
import { WhatsAppFloat } from "@/components/casa/WhatsAppFloat";
import { buildHead } from "@/lib/seo";
import { t } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => buildHead("pt", t.pt.faq.items.map(({ q, a }) => ({ q, a }))),
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
      <Faq lang="pt" />
      <Contact lang="pt" />
      <Footer lang="pt" />
      <WhatsAppFloat lang="pt" />
    </main>
  );
}
