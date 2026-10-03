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

export const Route = createFileRoute("/en")({
  head: () => buildHead("en", t.en.faq.items.map(({ q, a }) => ({ q, a }))),
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
      <Faq lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
      <WhatsAppFloat lang="en" />
    </main>
  );
}
