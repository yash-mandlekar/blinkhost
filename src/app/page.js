import AutomateSection from "@/components/Home/AutomateSection";
import FAQAccordion from "@/components/Home/FAQAccordion";
import FeaturesSection from "@/components/Home/FeaturesSection";
import GlobalLocationsSection from "@/components/Home/GlobalLocationsSection";
import HeroSection from "@/components/Home/HeroSection";
import N8nHeroSection from "@/components/Home/N8nHeroSection";
import N8nIntegrationsSection from "@/components/Home/N8nIntegrationsSection";
import N8nSelfHostSection from "@/components/Home/N8nSelfHostSection";
import PricingSection from "@/components/Home/PricingSection";
import StartAutomatingSection from "@/components/Home/StartAutomatingSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import TrustStatsSection from "@/components/Home/TrustStatsSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import WhyThousandsSection from "@/components/Home/WhyThousandsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <N8nHeroSection />
      <AutomateSection />
      <StartAutomatingSection />
      <N8nSelfHostSection />
      <N8nIntegrationsSection />
      <GlobalLocationsSection />
      <TrustStatsSection />
      <FAQAccordion />
      <FeaturesSection />
      <WhyChooseUsSection />
      <WhyThousandsSection />
      <TestimonialsSection />
    </div>
  );
}
