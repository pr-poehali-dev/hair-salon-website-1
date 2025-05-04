
import Icon from "@/components/ui/icon";
import { underlineAnimation } from "@/lib/animation";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Парикмахерская "Стиль"</h3>
            <p className="text-gray-400 mb-4">
              Создаем образы, которые подчеркивают индивидуальность каждого клиента
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <Icon name="MapPin" className="mr-2 text-primary" size={16} />
                <span>г. Москва, ул. Стрижечная, д. 42</span>
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="mr-2 text-primary" size={16} />
                <span>+7 (999) 123-45-67</span>
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="mr-2 text-primary" size={16} />
                <span>info@hairstyle.ru</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Режим работы</h4>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Пн-Пт:</span>
                <span>9:00 - 20:00</span>
              </p>
              <p className="flex justify-between">
                <span>Сб:</span>
                <span>10:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span>Вс:</span>
                <span>10:00 - 16:00</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Парикмахерская "Стиль". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
