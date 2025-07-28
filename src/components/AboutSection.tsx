import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import founderImage from "@/assets/carlos-garrido-founder.jpg";
const AboutSection = () => {
  const values = [{
    icon: Target,
    title: "Transparencia",
    description: "Procesos claros y comunicación directa en cada proyecto"
  }, {
    icon: Award,
    title: "Mejores prácticas",
    description: "Implementamos estándares internacionales de calidad"
  }, {
    icon: Users,
    title: "Empoderamiento",
    description: "Capacitamos a tu equipo para la autonomía tecnológica"
  }, {
    icon: Lightbulb,
    title: "Creatividad práctica",
    description: "Soluciones innovadoras adaptadas a tu realidad empresarial"
  }];
  return <section id="nosotros" className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Nosotros
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">Expertos en automatización empresarial con IA que transforman la manera de trabajar. Somos expertos en diseño e implementación de flujos de automatización basados en Generative AI y agentes inteligentes. Adaptamos la tecnología más avanzada a las necesidades prácticas de tu empresa, logrando resultados concretos en optimización y automatización.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Founder Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-hero bg-gradient-ai p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-surface-card">
                  <img src={founderImage} alt="Carlos Garrido - Fundador de Armonía Digital IA" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-ai text-white px-6 py-3 rounded-xl shadow-hero">
                <span className="font-semibold">Fundador & CEO</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* ¿Quiénes somos? */}
            

            {/* Conoce al Fundador */}
            <Card className="bg-surface-card border-0 shadow-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-text-primary mb-6">
                  Conoce al Fundador
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-text-primary text-xl mb-2">Carlos Garrido</h5>
                    <p className="text-primary font-medium">Economista & Máster en Information Management</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-primary" />
                        Formación Académica
                      </h6>
                      <ul className="space-y-2 text-text-secondary">
                        <li>• Economista (Universidad del Pacífico, Perú)</li>
                        <li>• Máster en Information Management (KU Leuven, Bélgica)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold text-text-primary mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary" />
                        Especialización
                      </h6>
                      <ul className="space-y-2 text-text-secondary">
                        <li>• Automatización financiera</li>
                        <li>• Analítica y procesos</li>
                        <li>• AI para optimización operativa</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-text-primary mb-3">Experiencia Internacional:</h6>
                    <p className="text-text-secondary leading-relaxed">
                      Consultoría internacional en automatización financiera en Europa y aplicación de AI para la optimización operativa. Especialista en analítica, procesos, finanzas, reporting y automatización.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Valores principales */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-text-primary mb-6">
            Nuestros Valores
          </h3>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
          const IconComponent = value.icon;
          return <Card key={index} className="group hover:shadow-hero transition-all duration-smooth hover:-translate-y-2 border-0 bg-surface-card text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-smooth">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-smooth">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default AboutSection;