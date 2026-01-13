import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <WhyChooseSection />
      <WorksSection />
      <PricingSection />
      <FlowSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
