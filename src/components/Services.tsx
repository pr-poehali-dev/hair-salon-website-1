
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { fadeInAnimation, scaleAnimation } from "@/lib/animation";

const services = [
  {
    icon: "Cut",
    title: "Стрижки",
    description: "Модельные и классические стрижки для мужчин и женщин любого возраста"
  },
  {
    icon: "Paintbrush",
    title: "Окрашивание",
    description: "Однотонное, мелирование, омбре, шатуш, балаяж и другие техники"
  },
  {
    icon: "Sparkles",
    title: "Укладка",
    description: "Повседневные и праздничные укладки, плетение кос, создание причесок"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр парикмахерских услуг с использованием
            профессиональной косметики премиум-класса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${fadeInAnimation} ${scaleAnimation} border-none shadow-lg`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
