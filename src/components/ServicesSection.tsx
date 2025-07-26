import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Search, Cog, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Automatización Avanzada de Reportes",
      description: "Automatización de reportes estructurados con integración de datos, validación mínima y conexión a plataformas.",
      features: [
        "Reportes automáticos periódicos",
        "Integración de múltiples fuentes de datos",
        "Dashboards dinámicos e interactivos",
        "Alertas inteligentes basadas en patrones"
      ]
    },
    {
      icon: Search,
      title: "Deep Research con Agentes Inteligentes",
      description: "Investigación profunda usando AI con acceso a documentos internos y la web, respuestas actualizadas y referenciadas.",
      features: [
        "Análisis de competencia automatizado",
        "Investigación de mercado inteligente",
        "Síntesis de información de múltiples fuentes",
        "Generación de insights estratégicos"
      ]
    },
    {
      icon: Database,
      title: "Análisis y Búsqueda Inteligente Multiplataforma (RAG)",
      description: "Análisis de documentos no estructurados y generación de respuestas integradas, precisas y con contexto.",
      features: [
        "Búsqueda semántica en documentos",
        "Base de conocimiento inteligente",
        "Respuestas contextualizadas",
        "Integración con sistemas existentes"
      ]
    },
    {
      icon: Cog,
      title: "Integración Avanzada de AI",
      description: "Conectamos y automatizamos flujos de trabajo complejos entre diferentes plataformas y sistemas, creando procesos fluidos y eficientes.",
      features: [
        "Automatización de flujos de trabajo",
        "Integración entre plataformas",
        "Procesos adaptativos e inteligentes",
        "Monitoreo y optimización continua"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Servicios
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Especializamos en soluciones de IA que realmente transforman la operación de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hero transition-all duration-smooth hover:-translate-y-2 border-0 bg-surface-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-ai rounded-lg group-hover:scale-110 transition-transform duration-smooth">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-colors duration-smooth">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;