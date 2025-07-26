import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import founderImage from "@/assets/carlos-garrido-founder.jpg";

const AboutSection = () => {
  const values = [
    "Transparencia",
    "Mejores prácticas", 
    "Empoderamiento",
    "Creatividad en soluciones prácticas"
  ];

  return (
    <section id="nosotros" className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Nosotros
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src={founderImage} 
                  alt="Carlos Garrido - Fundador de Armonía Digital IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-ai text-white px-4 py-2 rounded-lg shadow-card">
                <span className="text-sm font-semibold">Fundador & CEO</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* ¿Quiénes somos? */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                ¿Quiénes somos?
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Somos expertos en diseño e implementación de flujos de automatización basados en Generative AI y agentes inteligentes. Adaptamos la tecnología más avanzada a las necesidades prácticas de tu empresa, logrando resultados concretos en optimización y automatización.
              </p>
            </div>

            {/* Valores principales */}
            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">
                Valores principales
              </h4>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-surface-card text-text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-smooth px-4 py-2"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Conoce al Fundador */}
            <Card className="bg-surface-card border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  Conoce al Fundador
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-text-primary text-lg">Carlos Garrido</h5>
                  </div>
                  
                  <div>
                    <h6 className="font-medium text-text-primary mb-2">Títulos:</h6>
                    <ul className="space-y-1 text-text-secondary">
                      <li>• Economista (Universidad del Pacífico, Perú)</li>
                      <li>• Máster en Information Management (KU Leuven, Bélgica)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-medium text-text-primary mb-2">Experiencia:</h6>
                    <p className="text-text-secondary leading-relaxed">
                      Consultoría internacional en automatización financiera en Europa y aplicación de AI para la optimización operativa. Especialista en analítica, procesos, finanzas, reporting y automatización.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;