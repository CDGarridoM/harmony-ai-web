import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Clock, Target } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";
const Hero = () => {
  return <section id="inicio" className="pt-24 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Automatiza procesos y reportes con{" "}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  agentes de Inteligencia Artificial
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl text-justify">Excelencia profesional aplicada directamente a tus procesos empresariales mediante consultoría especializada automatización de procesos con IA Generativa y Agentes Inteligentes.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-ai text-white hover:opacity-90 transition-all duration-smooth shadow-hero">
                <ArrowRight className="w-5 h-5 mr-2" />
                Solicita tu Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-smooth">
                <Target className="w-5 h-5 mr-2" />
                Casos Aplicados
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3 p-4 bg-surface-card rounded-lg shadow-card">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-text-secondary">Aumenta la productividad con IA</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface-card rounded-lg shadow-card">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-text-secondary">
                  Optimiza tus reportes
                </span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-surface-card rounded-lg shadow-card">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-text-secondary">
                  Libera tiempo valioso
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img src={heroImage} alt="Automatización con IA" className="w-full rounded-2xl shadow-hero" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-ai-blue-light/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;