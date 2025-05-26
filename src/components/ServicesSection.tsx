import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, UserCheck, Search } from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "Registros de Cliente",
      description: "Asistencia completa para el registro y onboarding de nuevos clientes en el sistema.",
      color: "from-blue-500 to-cyan-500",
      details: "Proceso automatizado que incluye validación de datos, verificación de documentos y configuración inicial del perfil del cliente."
    },
    {
      icon: UserCheck,
      title: "Cambios de Nombre",
      description: "Procesamiento rápido y seguro de solicitudes de cambio de nombre e información personal.",
      color: "from-purple-500 to-pink-500",
      details: "Requiere certificado de libertad y tradición vigente (máximo 30 días) y cédula del propietario actualizada."
    },
    {
      icon: FileText,
      title: "Validación de Documentos",
      description: "Verificación automática de documentos y orientación sobre requisitos necesarios.",
      color: "from-green-500 to-emerald-500",
      details: "Sistema inteligente que valida formato, vigencia y autenticidad de documentos en tiempo real."
    },
    {
      icon: Search,
      title: "Redirección a Backend",
      description: "Conexión directa con sistemas backend para consultas avanzadas y procesamientos.",
      color: "from-orange-500 to-red-500",
      details: "Integración seamless con bases de datos y sistemas empresariales para consultas complejas."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Servicios de Soporte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestro asistente virtual está diseñado para ayudarte con todas tus necesidades de soporte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                selectedService === index ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  {service.description}
                </p>
                {selectedService === index && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 animate-fade-in">
                    <p className="text-sm text-gray-700 font-medium">
                      {service.details}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                ¿Por qué elegir nuestro soporte?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Disponibilidad 24/7 para atender tus consultas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Respuestas instantáneas y precisas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Integración directa con sistemas backend
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Interfaz intuitiva y fácil de usar
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Profesional trabajando" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
