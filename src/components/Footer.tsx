import { MessageCircle, Users, FileText, UserCheck } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const iconInfo = {
    chat: "Asistente virtual inteligente disponible 24/7",
    users: "Red de más de 1000 aliados comerciales activos"
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Soporte Aliados
            </h3>
            <p className="text-gray-300 mb-4">
              Tu asistente virtual inteligente para todas las necesidades de soporte y gestión.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedIcon(selectedIcon === 'chat' ? null : 'chat')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  selectedIcon === 'chat' 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg'
                }`}
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedIcon(selectedIcon === 'users' ? null : 'users')}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  selectedIcon === 'users' 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg'
                }`}
              >
                <Users className="h-5 w-5" />
              </button>
            </div>
            
            {/* Información del icono seleccionado */}
            {selectedIcon && (
              <div className="mt-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600 animate-fade-in">
                <p className="text-sm text-gray-300">
                  {iconInfo[selectedIcon as keyof typeof iconInfo]}
                </p>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-400" />
                Registros de Cliente
              </li>
              <li className="flex items-center">
                <UserCheck className="h-4 w-4 mr-2 text-purple-400" />
                Cambios de Nombre
              </li>
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-green-400" />
                Validación de Documentos
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Soporte 24/7</li>
              <li>Chat en tiempo real</li>
              <li>Asistencia especializada</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Términos de servicio</li>
              <li>Política de privacidad</li>
              <li>Guías de usuario</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Soporte Aliados. Todos los derechos reservados. Powered by IA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
