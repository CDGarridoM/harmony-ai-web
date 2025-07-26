import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnologiesSection from "@/components/TechnologiesSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechnologiesSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;