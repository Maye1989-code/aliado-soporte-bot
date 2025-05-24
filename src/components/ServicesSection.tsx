
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, UserCheck, Search } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Registros de Cliente",
      description: "Asistencia completa para el registro y onboarding de nuevos clientes en el sistema.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: UserCheck,
      title: "Cambios de Nombre",
      description: "Procesamiento rápido y seguro de solicitudes de cambio de nombre e información personal.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Validación de Documentos",
      description: "Verificación automática de documentos y orientación sobre requisitos necesarios.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "Redirección a Backend",
      description: "Conexión directa con sistemas backend para consultas avanzadas y procesamientos.",
      color: "from-orange-500 to-red-500"
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
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
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
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
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
