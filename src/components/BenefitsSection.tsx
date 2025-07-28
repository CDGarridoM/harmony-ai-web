import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Clock, Users, Target } from "lucide-react";
import automationImage from "@/assets/automation-process.jpg";
const BenefitsSection = () => {
  const benefits = ["Ahorro de tiempo y recursos significativo", "Mayor precisión en reportes y análisis", "Menos tareas repetitivas para tu equipo", "Resultados medibles y transparentes", "Escalabilidad automática de procesos", "Reducción de errores humanos", "Acceso 24/7 a información actualizada", "ROI medible desde el primer mes"];
  const stats = [{
    value: "85%",
    label: "Reducción en tiempo de reportes",
    icon: Clock
  }, {
    value: "60%",
    label: "Aumento en productividad",
    icon: TrendingUp
  }, {
    value: "95%",
    label: "Precisión en automatización",
    icon: Target
  }, {
    value: "24/7",
    label: "Disponibilidad de sistemas",
    icon: Users
  }];
  return <section className="py-20 bg-surface-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-ai-blue-light/10 text-primary border-primary/20"></Badge>
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Transforma tu negocio con{" "}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  IA práctica
                </span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">Nuestras soluciones de automatización ayudan a empresas a optimizar sus procesos y alcanzar resultados tangibles.</p>
            </div>

            {/* Benefits List */}
            <div className="grid gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-smooth" />
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-smooth">
                    {benefit}
                  </span>
                </div>)}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return <div key={index} className="text-center p-6 bg-surface-light rounded-xl hover:shadow-card transition-all duration-smooth hover:-translate-y-1">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>;
            })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img src={automationImage} alt="Procesos de automatización" className="w-full rounded-2xl shadow-hero" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ai-blue-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;