import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, MessageCircle, User } from "lucide-react";

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy Eva, tu asistente virtual. Estoy aquí para ayudarte de forma amable y profesional con:\n\n• Cambios de nombre o corrección de datos\n• Solicitudes de token para firma de documentos\n• Consultas sobre bloqueo de cupo\n• Preguntas frecuentes sobre documentación\n\n¿En qué puedo asistirte hoy?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState<string | null>(null);
  const [collectedData, setCollectedData] = useState<any>({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular respuesta del chatbot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Preguntas frecuentes específicas
    if (input.includes("qué documentos") && input.includes("cambio") && input.includes("nombre")) {
      return "Para cambio de nombre se requieren:\n\n• Certificado de libertad y tradición no mayor a 30 días\n• Cédula del propietario\n\n¿Necesitas ayuda con algún otro proceso?";
    }
    
    if (input.includes("cómo se hace") && input.includes("actualización")) {
      return "Para realizar una actualización:\n\n• Se adjuntan los documentos completos en la plataforma\n• El tiempo de procesamiento es de 24 horas para actualizarse\n\n¿Tienes alguna otra consulta?";
    }
    
    if (input.includes("escritura pública") && input.includes("cambio") && input.includes("nombre")) {
      return "No, la escritura pública no es un documento válido para realizar el trámite de cambio de nombre.\n\nDebes usar certificado de libertad y tradición no mayor a 30 días junto con la cédula del propietario.\n\n¿Necesitas más información?";
    }

    // Flujo de cambio de nombre o corrección de datos
    if ((input.includes("cambio") && input.includes("nombre")) || input.includes("corrección") || input.includes("datos")) {
      setConversationState("cambio_nombre");
      return "Para procesar tu solicitud de cambio de nombre o corrección de datos, necesito que compartas:\n\n• Los documentos requeridos (certificado de libertad y tradición no mayor a 30 días y cédula del propietario)\n• Los datos básicos del cliente\n\nPor favor, confirma que tienes estos documentos listos y son legibles. ¿Están todos los documentos disponibles?";
    }

    // Flujo de solicitud de token
    if (input.includes("token") || (input.includes("firma") && input.includes("documento"))) {
      setConversationState("solicitud_token");
      return "Para procesar tu solicitud de token para firma de documentos, necesito la siguiente información:\n\n1. Nombre completo del cliente\n2. Correo electrónico\n\nPor favor, proporciona el nombre completo del cliente:";
    }

    // Consulta sobre bloqueo de cupo
    if (input.includes("bloqueo") && input.includes("cupo")) {
      return "Para ayudarte con la consulta sobre bloqueo de cupo, necesito que me indiques el motivo específico que aparece en la plataforma.\n\n¿Cuál es el motivo de bloqueo que se muestra?";
    }

    // Manejo de flujos activos
    if (conversationState === "cambio_nombre") {
      if (input.includes("sí") || input.includes("si") || input.includes("disponibles") || input.includes("listos")) {
        setConversationState(null);
        return "Perfecto. Ahora necesito validar que:\n\n✓ Todos los documentos estén presentes\n✓ Sean legibles y vigentes\n✓ El certificado de libertad y tradición no supere los 30 días\n\nSi cumples con estos requisitos, la documentación está completa. Puedes continuar con el registro en la plataforma https://fin.aaa.com.co/admin/pqrs. Recuerda cargar los documentos previamente suministrados.";
      }
      if (input.includes("no") || input.includes("falta")) {
        setConversationState(null);
        return "Necesitas tener todos los documentos completos antes de continuar. Asegúrate de contar con:\n\n• Certificado de libertad y tradición (no mayor a 30 días)\n• Cédula del propietario\n\nContacta nuevamente cuando tengas toda la documentación lista.";
      }
    }

    if (conversationState === "solicitud_token") {
      if (!collectedData.nombre) {
        setCollectedData({ nombre: userInput });
        return "Gracias. Ahora necesito el correo electrónico del cliente:";
      } else if (!collectedData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(userInput)) {
          setConversationState(null);
          setCollectedData({});
          return "Tu solicitud fue enviada. En breve recibirás el token en el correo proporcionado.\n\n¿Hay algo más en lo que pueda ayudarte?";
        } else {
          return "El formato del correo electrónico no es válido. Por favor, proporciona un correo electrónico correcto (ejemplo: usuario@dominio.com):";
        }
      }
    }

    // Respuesta por defecto
    return "Entiendo tu consulta. Puedo ayudarte con:\n\n• Cambios de nombre o corrección de datos\n• Solicitudes de token para firma de documentos\n• Consultas sobre bloqueo de cupo\n• Preguntas frecuentes\n\n¿Podrías ser más específico sobre qué tipo de ayuda necesitas?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md h-[600px] bg-white shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Eva - Asistente Virtual</CardTitle>
                <p className="text-blue-100 text-sm">En línea</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-full flex flex-col">
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? "bg-blue-600" : "bg-purple-600"}`}>
                      {message.isUser ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <MessageCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${message.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-gray-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t bg-gray-50">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border-gray-200 focus:border-blue-500"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Enviar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBot;
