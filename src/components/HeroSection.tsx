
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { fadeInAnimation, scaleAnimation } from "@/lib/animation";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        style={{ filter: "brightness(0.6)" }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className={`max-w-2xl text-white ${fadeInAnimation}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Искусство <span className="text-primary">стрижки</span> и стиля
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Мы создаем уникальные образы, которые подчеркивают вашу индивидуальность. 
            Доверьтесь нашим мастерам и влюбитесь в свое отражение.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className={`bg-primary hover:bg-primary/90 ${scaleAnimation}`}
            >
              Записаться сейчас
              <Icon name="CalendarPlus" className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={`bg-transparent border-white text-white hover:bg-white/10 ${scaleAnimation}`}
            >
              Наши услуги
              <Icon name="Scissors" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Icon name="ChevronDown" className="text-white" size={32} />
      </div>
    </div>
  );
};

export default HeroSection;
