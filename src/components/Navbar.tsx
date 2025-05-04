
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/95 backdrop-blur-sm shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center animate-fade-up">
            <Icon 
              name="Scissors" 
              className={`mr-2 ${scrolled ? "text-primary" : "text-white"}`} 
              size={24} 
            />
            <span 
              className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              Салон Красоты
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["Главная", "Услуги", "Мастера", "Контакты"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${scrolled ? "text-gray-800" : "text-white"} 
                hover-underline-animation animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="animate-fade-up animate-delay-3">
            <Button 
              className="hover-scale bg-primary hover:bg-primary/90"
              size="sm"
            >
              <Icon name="Phone" className="mr-2" size={16} />
              Записаться
            </Button>
          </div>
          
          <button className="md:hidden animate-fade-up animate-delay-3">
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
