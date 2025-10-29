import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WhyThousandsSection from "@/components/sections/WhyThousandsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <WhyChooseUsSection />
      <WhyThousandsSection />
      <TestimonialsSection />
    </div>
  );
}
