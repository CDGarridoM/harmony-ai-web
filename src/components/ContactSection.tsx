import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    descripcion: "",
    frecuencia: "",
    duracion: "",
    fuentes: "",
    plataformas: "",
    presupuesto: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      nombre: "",
      empresa: "",
      correo: "",
      descripcion: "",
      frecuencia: "",
      duracion: "",
      fuentes: "",
      plataformas: "",
      presupuesto: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa conocer más sobre los servicios de automatización con IA de Armonía Digital. ¿Podríamos agendar una demo?"
  );

  return (
    <section id="contacto" className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Solicita una Demo Personalizada
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Conversa con nosotros y descubre cómo la automatización inteligente puede transformar tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card bg-surface-card">
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-ai rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <p className="text-text-secondary">contacto@armoniadigital.ai</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-ai rounded-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Teléfono</p>
                      <p className="text-text-secondary">+51 944 567 647</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-ai rounded-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">Horario</p>
                      <p className="text-text-secondary">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border-0 shadow-card bg-gradient-ai text-white">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">¿Prefieres WhatsApp?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Chatea directamente con nosotros para una respuesta rápida
                  </p>
                  <a
                    href={`https://wa.me/32456386409?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white text-primary hover:bg-gray-100 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Abrir WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card bg-surface-card">
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">
                    Cuéntanos sobre tu proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleChange("nombre", e.target.value)}
                          required
                          className="border-border focus:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa *</Label>
                        <Input
                          id="empresa"
                          value={formData.empresa}
                          onChange={(e) => handleChange("empresa", e.target.value)}
                          required
                          className="border-border focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="correo">Correo Electrónico *</Label>
                      <Input
                        id="correo"
                        type="email"
                        value={formData.correo}
                        onChange={(e) => handleChange("correo", e.target.value)}
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="descripcion">Descripción del proceso a automatizar</Label>
                      <Textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={(e) => handleChange("descripcion", e.target.value)}
                        placeholder="Describe brevemente qué proceso te gustaría automatizar..."
                        className="border-border focus:ring-primary min-h-[100px]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="frecuencia">Frecuencia del proceso</Label>
                        <Select value={formData.frecuencia} onValueChange={(value) => handleChange("frecuencia", value)}>
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Selecciona frecuencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diario">Diario</SelectItem>
                            <SelectItem value="semanal">Semanal</SelectItem>
                            <SelectItem value="mensual">Mensual</SelectItem>
                            <SelectItem value="trimestral">Trimestral</SelectItem>
                            <SelectItem value="anual">Anual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duracion">Duración actual del proceso</Label>
                        <Select value={formData.duracion} onValueChange={(value) => handleChange("duracion", value)}>
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Tiempo que toma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="menos-1h">Menos de 1 hora</SelectItem>
                            <SelectItem value="1-4h">1-4 horas</SelectItem>
                            <SelectItem value="4-8h">4-8 horas</SelectItem>
                            <SelectItem value="1-2d">1-2 días</SelectItem>
                            <SelectItem value="mas-2d">Más de 2 días</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fuentes">Fuentes de información</Label>
                      <Input
                        id="fuentes"
                        value={formData.fuentes}
                        onChange={(e) => handleChange("fuentes", e.target.value)}
                        placeholder="Ej: Excel, bases de datos, sitios web, APIs..."
                        className="border-border focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="plataformas">Plataformas actuales</Label>
                      <Input
                        id="plataformas"
                        value={formData.plataformas}
                        onChange={(e) => handleChange("plataformas", e.target.value)}
                        placeholder="Ej: Google Workspace, Salesforce, HubSpot..."
                        className="border-border focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presupuesto">Presupuesto estimado</Label>
                      <Select value={formData.presupuesto} onValueChange={(value) => handleChange("presupuesto", value)}>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Rango de inversión" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">$5,000 - $15,000 USD</SelectItem>
                          <SelectItem value="15k-30k">$15,000 - $30,000 USD</SelectItem>
                          <SelectItem value="30k-50k">$30,000 - $50,000 USD</SelectItem>
                          <SelectItem value="50k+">$50,000+ USD</SelectItem>
                          <SelectItem value="por-definir">Por definir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-ai text-white hover:opacity-90 transition-all duration-smooth shadow-card"
                      size="lg"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Solicitar Demo Gratuita
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;