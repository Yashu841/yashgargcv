import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const skills = [
    { name: "Product Management", level: 92 },
    { name: "Communication", level: 90 },
    { name: "Decision Making", level: 95 },
    { name: "Finance Analytics", level: 80 },
    { name: "Problem Solving", level: 85 },
    { name: "Innovation", level: 88 },
    { name: "Team Collaboration", level: 92 },
  ];

  const certifications = [
    {
      title: "Oracle Database Platform Foundation Associate",
      description: "Cloud infrastructure and Oracle database operations",
    },
    {
      title: "JP Morgan Investment Banking",
      description: "Financial analysis and investment banking fundamentals",
    },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="skills" 
      className={`py-24 md:py-32 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
              Expertise
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10">
              Core <span className="text-gradient">Skills</span>
            </h2>
            
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: 'var(--gradient-primary)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
              Achievements
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10">
              Certi<span className="text-gradient">fications</span>
            </h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-xl group-hover:glow-effect transition-all">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Languages */}
            <div className="mt-10">
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Languages
              </h3>
              <div className="flex gap-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium">
                  English
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium">
                  Hindi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
