import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Product Management with AI",
      institution: "IIT Roorkee (Managed by Masai)",
      year: "Currently Enrolled",
      score: "Ongoing",
    },
    {
      degree: "Bachelors of Commerce (B.Com)",
      institution: "Delhi University - School of Open Learning",
      year: "2022 - 2025",
      score: "60%",
    },
    {
      degree: "12th Standard",
      institution: "Dewan Public School",
      year: "2022",
      score: "73.4%",
    },
    {
      degree: "10th Standard",
      institution: "Dewan Public School",
      year: "2020",
      score: "58.6%",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Education
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:glow-effect transition-all">
                  <GraduationCap size={28} />
                </div>
                
                <span className="text-primary text-sm font-medium">{edu.year}</span>
                
                <h3 className="font-heading text-lg font-semibold mt-2 mb-2 text-foreground">
                  {edu.degree}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">{edu.institution}</p>
                
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-primary font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
