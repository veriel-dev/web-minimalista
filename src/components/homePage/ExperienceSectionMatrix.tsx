import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, Section } from '../ui';

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: 'Desarrollador en I+D',
    company: 'eCapture3D S.L',
    dates: 'Abr 2021 - Jun 2021',
    description: [
      'Modelos predictivos basados en Machine Learning y Deep Learning para análisis de variables climáticas con datos de AEMET.',
      'Identificación de patrones clave en grandes volúmenes de datos meteorológicos, mejorando la precisión de los modelos.',
      'Procesamiento y análisis de datos de AEMET.',
      'Participación en proyectos de investigación tecnológica avanzada en análisis de datos climáticos.',
    ],
  },
  {
    title: 'Desarrollador OWCS',
    company: 'Viewnext S.A',
    dates: 'Ago 2021 - Dic 2023',
    description: [
      'Diseño e implementación de soluciones empresariales completas en Oracle WebCenter Sites (OWCS).',
      'Gestión y optimización del CMS adaptándolo a necesidades específicas del negocio.',
      'Mejora del rendimiento y escalabilidad de aplicaciones, incrementando su eficiencia operativa.',
    ],
  },
  {
    title: 'Desarrollador OWCS + Spring Boot',
    company: 'Viewnext S.A',
    dates: 'Febre 2023 - Mar 2025',
    description: [
      'Evolución desde desarrollo a roles analíticos implementando soluciones con JavaScript/TypeScript y Java.',
      'Arquitectura e implementación de soluciones empresariales integrales en OWCS/Spring Framework.',
      'Optimización de rendimiento en aplicaciones críticas para el negocio.',
    ],
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Viewnext S.A',
    dates: 'Abr 2025 - Mayo 2018',
    description: [
      'Desarrollo de interfaces modernas y responsivas con React.',
      'Implementación de mejoras UX/UI basadas en necesidades de usuario y métricas de negocio.',
      'Optimización de aplicaciones React para máximo rendimiento y escalabilidad.',
    ],
  },
  {
    title: 'Desarrollador OWCS + Spring Boot',
    company: 'Alvea Soluciones Tecnológicas S.L',
    dates: 'May 2025 - Presente',
    description: [
      'Arquitectura e implementación de soluciones empresariales integrales utilizando OWCS y Spring Boot.',
      'Optimización de rendimiento y escalabilidad en aplicaciones críticas para el negocio.',
      'Resolución proactiva de incidencias técnicas y mantenimiento correctivo de sistemas en producción.',
      'Gestión directa de relaciones con clientes, proporcionando soporte técnico especializado y seguimiento continuo',
      'Desarrollo e implementación de nuevas funcionalidades siguiendo metodologías ágiles y mejores prácticas de desarrollo',
      'Proyecto manejado y mantenido por Indra/Minsait',
    ],
  },
];

export default function ExperienceSectionMatrix() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            experienceData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Section
      variant="light"
      className="z-10 relative  bg-black/20  backdrop-blur-sm  shadow-2xl p-12 rounded-lg"
    >
      <div ref={sectionRef} className="px-6 py-20 font-mono">
        <style>{`
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0px rgba(0, 255, 65, 0.5); }
          50% { box-shadow: 0 0 15px rgba(0, 255, 65, 0.8); }
          100% { box-shadow: 0 0 0px rgba(0, 255, 65, 0.5); }
        }

        .timeline-dot-pulse {
          animation: pulse-border 3s infinite ease-in-out;
          background: #4ade80;
        }

        .timeline-line {
          background: #4ade80;
        }

        .card-hover-effect {
          position: relative;
          overflow: hidden;
        }

        .card-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            #4ade80,
            transparent
          );
          transition: left 0.5s ease;
          z-index: 1;
        }

        .card-hover-effect:hover::before {
          left: 100%;
        }

        .experience-card {
          backdrop-filter: blur(10px);
          background: transparent;
        }

        .experience-card:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-2px);
        }

        .toggle-button:hover {
          background: rgba(0, 255, 65, 0.1);
        }
      `}</style>

        <div className="max-w-6xl mx-auto">
          {/* <Card className="bg-black/90"> */}
          <Card className="bg-transparent backdrop-blur-sm">
            <div className="p-0 md:p-12">
              <h2 className="text-3xl font-bold mb-12 flex items-center justify-center flex-wrap gap-4 md:gap-0 text-green-400">
                <div className="w-16 h-16  border-2 border-green-400 rounded-none flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-green-400" />
                </div>
                EXPERIENCIA
              </h2>

              <div className="relative">
                {/* Vertical Timeline Line - Solo en desktop */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden sm:block"></div>

                <div className="space-y-8">
                  {experienceData.map((item, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-700 ease-out ${
                        visibleItems.includes(index)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                      }`}
                    >
                      {/* Timeline Dot - Solo en desktop */}
                      <div className="absolute left-2 top-6 w-12 h-12 bg-green-400 rounded-full border-4 border-green-950 z-10 timeline-dot-pulse hidden sm:flex items-center justify-center">
                        <Briefcase className="h-6 w-6 font-bold text-green-900" />
                      </div>

                      {/* Content Card */}
                      <div className="ml-0 sm:ml-20 ">
                        <Card className="experience-card border-2 border-green-700/30 hover:border-green-400/70 transition-all duration-300 B shadow-lg hover:shadow-green-400/20 card-hover-effect rounded-lg">
                          <div className="p-6">
                            {/* Header con botón toggle solo en desktop */}
                            <div
                              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:cursor-pointer"
                              onClick={() => window.innerWidth >= 640 && toggleExpand(index)}
                            >
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-green-300 tracking-wide mb-2 sm:mb-1">
                                  {item.title}
                                </h3>
                                <p className="text-green-400 text-xl mb-2 sm:mb-0">
                                  {item.company}
                                </p>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-2">
                                <span className="text-base text-green-500 flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {item.dates}
                                </span>
                                {/* Toggle button - Solo visible en desktop */}
                                <button className="hidden sm:flex items-center text-green-500 text-sm hover:text-green-400 transition-colors duration-200 toggle-button px-2 py-1 rounded">
                                  {expandedItem === index ? (
                                    <>
                                      <ChevronUp className="h-4 w-4 mr-1" />
                                      Ver menos
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-4 w-4 mr-1" />
                                      Ver más
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Description */}
                            <div className="border-t border-green-900/30 pt-4">
                              {/* Desktop: Con toggle */}
                              <div
                                className={`hidden sm:block overflow-hidden transition-all duration-500 ease-in-out ${
                                  expandedItem === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                }`}
                              >
                                {item.description.map((desc, descIndex) => (
                                  <p
                                    key={descIndex}
                                    className="text-green-300 text-base mb-3 leading-relaxed"
                                  >
                                    {desc}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
