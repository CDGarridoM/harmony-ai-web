import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [{
    question: "¿Qué tipo de procesos puedo automatizar con IA?",
    answer: "Podemos automatizar una amplia gama de procesos empresariales: generación de reportes, análisis de datos, investigación de mercado, gestión de documentos, flujos de trabajo administrativos, análisis de competencia, síntesis de información, y mucho más. Evaluamos cada caso específico para determinar la mejor estrategia de automatización."
  }, {
    question: "¿Cuánto tiempo toma implementar una solución de automatización?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden estar listos en 1-2 semanas, mientras que soluciones más complejas pueden tomar de 4-8 semanas. Trabajamos con metodologías ágiles que permiten entregas incrementales y ajustes durante el proceso."
  }, {
    question: "¿Necesito conocimientos técnicos para usar las soluciones?",
    answer: "No necesitas conocimientos técnicos avanzados. Diseñamos interfaces intuitivas y proporcionamos capacitación completa. Nuestro objetivo es que tu equipo pueda usar las soluciones de forma autónoma, con soporte continuo disponible cuando lo necesites."
  }, {
    question: "¿Cómo garantizan la seguridad de nuestros datos?",
    answer: "La seguridad es nuestra prioridad. Implementamos cifrado end-to-end, acceso basado en roles, auditorías de seguridad regulares y cumplimos con estándares internacionales de protección de datos. Podemos trabajar con infraestructura on-premise o cloud según tus políticas de seguridad."
  }, {
    question: "¿Qué tipo de ROI puedo esperar?",
    answer: "Nuestros clientes típicamente ven ROI positivo en 2-6 meses. Los beneficios incluyen: 60-85% de reducción en tiempo de tareas manuales, 95% menos errores en procesos automatizados, y liberación de recursos humanos para tareas estratégicas. Proporcionamos métricas claras para medir el impacto."
  }, {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Sí, incluimos soporte técnico, actualizaciones de sistema, optimizaciones continuas y capacitación adicional. Nuestro objetivo es una relación a largo plazo que asegure el éxito continuo de tu inversión en automatización."
  }, {
    question: "¿Pueden integrarse con nuestros sistemas existentes?",
    answer: "Absolutamente. Tenemos experiencia integrando con CRMs (Salesforce, HubSpot), ERPs, bases de datos, APIs, Google Workspace, Microsoft 365, y muchas otras plataformas. Evaluamos tu stack tecnológico actual y diseñamos integraciones seamless."
  }, {
    question: "¿Qué diferencia a Armonía Digital IA de otras consultoras?",
    answer: "Nuestra ventaja diferencial está en la combinación de experiencia técnica profunda en IA, conocimiento empresarial práctico, y enfoque en resultados medibles. No vendemos tecnología por tecnología, sino soluciones que realmente transforman operaciones y generan valor tangible para tu negocio."
  }];
  
  return (
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Respuestas a las consultas más comunes sobre nuestros servicios de automatización con IA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-surface-card border-0 rounded-lg shadow-card overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-surface-light transition-colors">
                  <span className="text-lg font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;