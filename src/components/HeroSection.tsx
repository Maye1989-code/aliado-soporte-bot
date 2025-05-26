
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, FileText, UserCheck } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onOpenChat: () => void;
}

const HeroSection = ({ onOpenChat }: HeroSectionProps) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const iconInfo = {
    chat: {
      icon: MessageCircle,
      title: "Chat Inteligente",
      description: "Asistente virtual disponible 24/7 para resolver todas tus consultas de manera instantánea."
    },
    users: {
      icon: Users,
      title: "1000+ Aliados",
      description: "Red de aliados comerciales que confían en nuestro sistema de soporte inteligente."
    },
    validation: {
      icon: UserCheck,
      title: "Validación Rápida",
      description: "Validación automática de documentos y verificación de requisitos en tiempo real."
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Soporte Inteligente para
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Aliados
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Resuelve dudas sobre registros, cambios de nombre, validación de documentos 
              y más con nuestro asistente virtual disponible 24/7.
            </p>
            
            {/* Iconos seleccionables */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {Object.entries(iconInfo).map(([key, info]) => {
                const IconComponent = info.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedIcon(selectedIcon === key ? null : key)}
                    className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      selectedIcon === key 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'bg-white/80 text-gray-700 hover:bg-white shadow-md'
                    }`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </button>
                );
              })}
            </div>

            {/* Información del icono seleccionado */}
            {selectedIcon && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-200 animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {iconInfo[selectedIcon as keyof typeof iconInfo].title}
                </h3>
                <p className="text-gray-600">
                  {iconInfo[selectedIcon as keyof typeof iconInfo].description}
                </p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onOpenChat}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciar Chat
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Persona trabajando con laptop" 
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg">
                <UserCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">1000+ Aliados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
