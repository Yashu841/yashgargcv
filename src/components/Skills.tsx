import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

// Certificate images
import masaiverseCert from "@/assets/certificates/masaiverse-coding-ai.jpg";
import oracleCert from "@/assets/certificates/oracle-data-platform.jpg";
import jpmorganCert from "@/assets/certificates/jpmorgan-investment-banking.jpg";
import yuvaAiCert from "@/assets/certificates/yuva-ai-india-mission.jpg";
import icatCert from "@/assets/certificates/icat-participation.jpg";

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
      title: "Masaiverse - Coding with AI",
      description: "Participated in masterclass 'Coding with AI - From idea to product in minutes'",
      certificateId: "MASAIVERSE09012651",
      image: masaiverseCert,
    },
    {
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      description: "Cloud infrastructure and Oracle database operations",
      certificateId: "103012989OCI25DCFA",
      image: oracleCert,
    },
    {
      title: "JP Morgan Investment Banking Job Simulation",
      description: "Financial analysis, M&A targets, and investment recommendations",
      certificateId: "TyK7he6uGfHyRfrZB",
      image: jpmorganCert,
    },
    {
      title: "Certification of YUVA AI FOR ALL - INDIA AI MISSION",
      description: "Hands-on approach to AI for real-world applications",
      certificateId: "231713-29841836-32914",
      image: yuvaAiCert,
    },
    {
      title: "ICAT Participation Certificate",
      description: "Internship Common Aptitude Test participation",
      certificateId: "CIT-P-2676036",
      image: icatCert,
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
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Dialog key={cert.title}>
                  <DialogTrigger asChild>
                    <div className="card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-lg group-hover:glow-effect transition-all flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-base font-semibold mb-1 text-foreground line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-1">{cert.description}</p>
                          <p className="text-xs text-primary/70 mt-1 font-mono">ID: {cert.certificateId}</p>
                        </div>
                        <div className="flex items-center gap-1 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-4 overflow-hidden flex flex-col">
                    <DialogTitle className="text-lg font-heading font-semibold mb-2">{cert.title}</DialogTitle>
                    <div className="flex-1 overflow-auto">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-auto rounded-md border pointer-events-none select-none"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                    <p className="text-center text-sm text-muted-foreground pt-3 flex-shrink-0">
                      Certificate ID: <span className="font-mono text-primary">{cert.certificateId}</span>
                    </p>
                  </DialogContent>
                </Dialog>
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
