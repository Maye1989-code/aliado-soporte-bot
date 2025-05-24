
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, FileText, UserCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenChat: () => void;
}

const HeroSection = ({ onOpenChat }: HeroSectionProps) => {
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
