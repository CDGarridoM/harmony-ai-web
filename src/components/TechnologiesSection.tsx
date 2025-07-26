import { Badge } from "@/components/ui/badge";

const TechnologiesSection = () => {
  const technologies = [
    { name: "OpenAI GPT", logo: "🤖" },
    { name: "LangChain", logo: "🔗" },
    { name: "N8n", logo: "⚡" },
    { name: "Flowise", logo: "🌊" },
    { name: "Mistral AI", logo: "🧠" },
    { name: "Claude", logo: "🎯" },
    { name: "Automation", logo: "⚙️" },
    { name: "RAG Systems", logo: "📚" },
  ];

  return (
    <section className="py-16 bg-surface-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Tecnologías y Herramientas que Dominamos
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Utilizamos las mejores tecnologías de IA y automatización para crear soluciones robustas y escalables
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-surface-light rounded-xl hover:shadow-card transition-all duration-smooth hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-smooth">
                {tech.logo}
              </div>
              <Badge variant="secondary" className="text-xs font-medium">
                {tech.name}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-text-secondary">
            Y muchas más tecnologías adaptadas a las necesidades específicas de tu negocio
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;