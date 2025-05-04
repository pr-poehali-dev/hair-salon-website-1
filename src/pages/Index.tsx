
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Парикмахерская Стиль - Искусство стрижки и стиля";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
