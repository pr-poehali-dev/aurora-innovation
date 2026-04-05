import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseExample } from "@/components/CaseExample";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { TelegramBot } from "@/components/TelegramBot";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-background">
        <ProblemSection />
        <HowItWorks />
        <CaseExample />
        <BenefitsSection />
        <AudienceSection />
        <TelegramBot />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
