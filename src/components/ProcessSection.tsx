import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PenTool, Rocket, HeartHandshake } from "lucide-react";
const ProcessSection = () => {
  const steps = [{
    icon: Search,
    title: "1. Diagnóstico",
    description: "Analizamos tus procesos actuales, identificamos oportunidades de automatización y definimos objetivos claros y medibles."
  }, {
    icon: PenTool,
    title: "2. Diseño Personalizado",
    description: "Creamos una solución a medida utilizando las mejores tecnologías de IA, adaptada específicamente a tu industria y necesidades."
  }, {
    icon: Rocket,
    title: "3. Implementación Ágil",
    description: "Desarrollamos e implementamos la solución de forma iterativa, con entregas frecuentes y retroalimentación continua."
  }, {
    icon: HeartHandshake,
    title: "4. Empoderamiento y Soporte",
    description: "Capacitamos a tu equipo y proporcionamos soporte continuo para garantizar el éxito a largo plazo de la implementación."
  }];
  return <section id="nosotros" className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Nuestro Enfoque de Trabajo
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados exitosos en cada proyecto de automatización
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <Card key={index} className="group hover:shadow-hero transition-all duration-smooth hover:-translate-y-2 border-0 bg-surface-card relative overflow-hidden">
                {/* Step connector line for desktop */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-ai-blue-light z-10"></div>}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-gradient-ai rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-smooth">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-colors duration-smooth">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-text-secondary text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default ProcessSection;