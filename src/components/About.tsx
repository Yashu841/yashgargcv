import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Professional Esports",
      description: "1 year as S8UL Esports athlete competing in PUBGM tournaments",
    },
    {
      icon: GraduationCap,
      title: "B.Com Graduate",
      description: "Delhi University - School of Open Learning (2022-2025)",
    },
    {
      icon: Trophy,
      title: "Competitive Achievements",
      description: "Podium finishes in multiple tournaments including 2 offline LAN events",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About text */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Where Gaming Meets
              <span className="text-gradient"> Product</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a highly driven commerce graduate seeking opportunities in product 
                management, with additional interests in finance and investment banking. 
                My unique background combines analytical skills with the discipline and 
                strategic thinking developed through professional esports.
              </p>
              <p>
                During my time at S8UL Esports, I competed at the highest level in PUBG 
                Mobile New State tournaments, developing exceptional decision-making abilities 
                under pressure and collaborative team skills that translate directly to the 
                business world.
              </p>
              <p>
                I bring strong communication skills, innovative problem-solving capabilities, 
                and an unwavering commitment to excellence in everything I do.
              </p>
            </div>
            
            {/* Interests */}
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Product Strategy", "Esports", "Investment Banking", "Finance", "Technology", "Gaming"].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hobbies */}
            <div className="mt-6">
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Watching Cricket", "Playing Esports", "Watching Esports"].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Highlight cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:glow-effect transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
