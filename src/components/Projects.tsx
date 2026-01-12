import { ExternalLink, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Productify",
    description:
      "A web app that helps users generate professional product descriptions, PRDs, and product ideas using AI in seconds. It turns simple inputs into clear, structured product content — helping founders, PMs, and creators move from idea to execution faster.",
    highlights: [
      "Generates AI-written product descriptions and product ideas",
      "Converts rough inputs into structured, readable outputs",
      "Works instantly through a simple web interface",
    ],
    impact:
      "Demonstrates ability to apply AI to solve real product problems, build full-stack web apps, and turn product thinking into working software.",
    link: "https://ai-productify--Yashgarg1212.replit.app",
    tags: ["AI", "JavaScript", "Full-Stack", "Product Management"],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`py-24 md:py-32 relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Projects
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-gradient p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Sparkles size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
