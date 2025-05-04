
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  useEffect(() => {
    document.title = "Салон Красоты | Искусство стиля";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
