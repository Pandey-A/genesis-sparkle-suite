import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import GatedContentSection from "@/components/GatedContentSection";
import StatsSection from "@/components/StatsSection";
import DoctorSection from "@/components/DoctorSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CertificatesSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <TopBar /> */}
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <GatedContentSection />
        {/* <StatsSection /> */}
        <VideoTestimonialsSection />
        <DoctorSection />
        {/* <WhyChooseUs /> */}
        {/* <ServicesSection />
        <VideoTestimonialsSection /> */}
        <CertificatesSection/>
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
