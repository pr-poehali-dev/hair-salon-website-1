
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        style={{ filter: "brightness(0.6)" }}
      />
      
      {/* Контент секции */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up">
            Искусство <span className="text-primary">стиля</span> и красоты
          </h1>
          <p className="text-xl mb-8 text-gray-100 animate-fade-up animate-delay-1">
            Мы создаем уникальные образы, которые подчеркивают вашу индивидуальность. 
            Доверьтесь нашим мастерам и откройте новую себя.
          </p>
          <div className="space-x-4 animate-fade-up animate-delay-2">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover-scale"
            >
              Записаться сейчас
              <Icon name="CalendarPlus" className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 hover-scale"
            >
              Наши услуги
              <Icon name="Scissors" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Анимированная стрелка вниз */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#услуги">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </a>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
