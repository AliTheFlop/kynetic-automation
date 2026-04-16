import { Column } from "@once-ui-system/core";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FailedSolutionsSection from "@/components/FailedSolutionsSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Column fillWidth fillHeight>
      <Navbar />
      
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <HeroSection />
        <PainPointsSection />
        <FailedSolutionsSection />
        <ValuePropositionSection />
        <ContactSection />
      </main>

      <Footer />
    </Column>
  );
}
