
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { scaleAnimation, underlineAnimation } from "@/lib/animation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-white shadow-md" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon 
              name="Scissors" 
              className={`mr-2 ${scrolled ? "text-primary" : "text-white"}`} 
              size={24} 
            />
            <span 
              className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              Стиль
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["Главная", "Услуги", "О нас", "Галерея", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${scrolled ? "text-gray-700" : "text-white"} ${underlineAnimation}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <Button 
            className={`${scaleAnimation} bg-primary hover:bg-primary/90`}
            size="sm"
          >
            <Icon name="Phone" className="mr-2" size={16} />
            Связаться
          </Button>
          
          <button className="md:hidden">
            <Icon 
              name="Menu" 
              className={scrolled ? "text-gray-900" : "text-white"} 
              size={24} 
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
