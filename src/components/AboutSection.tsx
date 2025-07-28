import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import founderImage from "@/assets/carlos-garrido-founder.jpg";
const AboutSection = () => {
  const values = [{
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
          <p className="text-xl text-text-secondary max-w-3xl mx-auto text-justify">Expertos en automatización empresarial con IA que transforman la manera de trabajar. Somos expertos en diseño e implementación de flujos de automatización basados en IA Generativa y agentes inteligentes. Adaptamos la tecnología más avanzada a las necesidades prácticas de tu empresa, logrando resultados concretos en optimización y automatización.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
            {/* Conoce al Fundador */}
            <Card className="bg-surface-card border-0 shadow-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-text-primary mb-6">
                  Conoce al Fundador
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-text-primary text-xl mb-2">Carlos Garrido</h5>
                      <p className="text-primary font-medium">Economista & Máster en Information Management</p>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/cdgm/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors"
                      aria-label="LinkedIn de Carlos Garrido"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
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
                    <p className="text-text-secondary leading-relaxed text-justify">
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

        <div className="grid md:grid-cols-3 gap-6">
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