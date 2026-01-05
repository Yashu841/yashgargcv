import { GraduationCap, Award, BookOpen, School } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const education = [
    {
      degree: "Product Management with Applied AI",
      institution: "IIT Roorkee (Managed by Masai)",
      year: "Currently Enrolled",
      score: "Ongoing",
      icon: Award,
      highlight: true,
    },
    {
      degree: "Bachelors of Commerce (B.Com)",
      institution: "Delhi University - School of Open Learning",
      year: "2022 - 2025",
      score: "60%",
      icon: GraduationCap,
      highlight: false,
    },
    {
      degree: "12th Standard",
      institution: "Dewan Public School",
      year: "2022",
      score: "73.4%",
      icon: BookOpen,
      highlight: false,
    },
    {
      degree: "10th Standard",
      institution: "Dewan Public School",
      year: "2020",
      score: "58.6%",
      icon: School,
      highlight: false,
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="education" 
      className={`py-24 md:py-32 relative bg-secondary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Education
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div
                  key={edu.degree}
                  className={`relative p-6 rounded-2xl border transition-all duration-500 group text-center overflow-hidden
                    ${edu.highlight 
                      ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/50 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105' 
                      : 'card-gradient border-border hover:border-primary/50 hover:scale-102'
                    }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Highlight badge for current enrollment */}
                  {edu.highlight && (
                    <div className="absolute -top-1 -right-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl rounded-tr-xl">
                      NEW
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300
                    ${edu.highlight 
                      ? 'bg-primary text-primary-foreground glow-effect' 
                      : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                    <IconComponent size={26} />
                  </div>
                  
                  <span className={`text-sm font-semibold ${edu.highlight ? 'text-primary' : 'text-primary/80'}`}>
                    {edu.year}
                  </span>
                  
                  <h3 className="font-heading text-base font-bold mt-2 mb-2 text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{edu.institution}</p>
                  
                  <div className={`inline-block px-4 py-1.5 rounded-full transition-all duration-300
                    ${edu.highlight 
                      ? 'bg-primary/30 border border-primary/50' 
                      : 'bg-primary/10 border border-primary/30 group-hover:bg-primary/20'
                    }`}>
                    <span className="text-primary font-bold text-sm">{edu.score}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
