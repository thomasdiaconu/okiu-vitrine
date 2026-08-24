import Hero from "@/components/Hero";
import Probleme from "@/components/Probleme";
import Solution from "@/components/Solution";
import Parcours from "@/components/Parcours";
import Confiance from "@/components/Confiance";
import Pilote from "@/components/Pilote";
import PourQui from "@/components/PourQui";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main id="contenu">
      <Hero />
      <Probleme />
      <Solution />
      <Parcours />
      <Confiance />
      <Pilote />
      <PourQui />
      <Faq />
      <Cta />
    </main>
  );
}
