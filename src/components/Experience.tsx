import { Calendar, Building2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Experience card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary glow-effect" />
              
              <div className="card-gradient p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 size={18} />
                    <span className="font-heading font-semibold text-lg">S8UL Esports</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>Dec 2022 - Dec 2023</span>
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  Esports Athlete - PUBGM New State
                </h3>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Competed in numerous high-stakes tournaments under the S8UL Esports banner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Achieved podium positions in multiple competitive tournaments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Participated in 2 offline LAN events, demonstrating performance under pressure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <span>Developed strategic thinking, team coordination, and rapid decision-making skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
