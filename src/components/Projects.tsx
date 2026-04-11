import { ExternalLink, Sparkles, FileText, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "LinkedIn Job Relevance System",
    description:
      "A product case study on improving job relevance for freshers on LinkedIn — designing a self-improving job matching system that reduces noise and improves career outcomes through smart matching, skill gap detection, and feedback loops.",
    whyBuilt:
      "Freshers face irrelevant recommendations, high application volume with low response rates, and no visibility into why jobs match. I wanted to design a system that gives users context, direction, and feedback — not just listings.",
    highlights: [
      "Smart Match Score showing relevance % for each job",
      "Match Explanation highlighting why a job fits & missing skills",
      "Skill Gap Detection identifying high-impact skills to improve",
      "Feedback Loop where users mark irrelevant jobs to adapt recommendations",
    ],
    demonstrates: [
      "End-to-end product thinking from problem to prototype",
      "System design with signal capture, intelligent matching & feedback loops",
      "Low-fi (Visily) and high-fi (Google Stitch) design process",
      "Focus on user pain points and measurable success metrics",
    ],
    link: "",
    prototypeLink: "https://stitch.withgoogle.com/preview/15251693336887082855?node-id=fd907ea77be14c9880af2f358126200f",
    caseStudyLink: "https://docs.google.com/document/d/13kO0hzRfXvX2CpPTuWVk9VHMnhpW9R97Uzndi0ozx-s/edit?usp=sharing",
    tags: ["Product Management", "UX Design", "System Thinking", "Prototyping"],
  },
  {
    title: "AI Productify",
    description:
      "A web app that helps users generate professional product descriptions, PRDs, and product ideas using AI in seconds. It turns simple inputs into clear, structured product content — helping founders, PMs, and creators move from idea to execution faster.",
    whyBuilt:
      "Writing PRDs and product copy takes time and clarity. I wanted to build a tool that helps anyone — especially freshers and founders — think and write like a Product Manager.",
    highlights: [
      "Generates AI-written product descriptions and product ideas",
      "Converts rough inputs into structured, readable outputs",
      "Works instantly through a simple web interface",
    ],
    demonstrates: [
      "Apply AI to solve real product problems",
      "Build and deploy full-stack web apps",
      "Design clear, user-friendly product experiences",
      "Turn product thinking into working software",
    ],
    link: "https://ai-productify--Yashgarg1212.replit.app",
    prototypeLink: "",
    caseStudyLink: "",
    tags: ["HTML", "CSS", "JavaScript", "AI APIs"],
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

              <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Why I Built It
                </h4>
                <p className="text-sm text-muted-foreground italic">
                  {project.whyBuilt}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
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

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    What It Demonstrates
                  </h4>
                  <ul className="space-y-2">
                    {project.demonstrates.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="text-primary mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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

                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.caseStudyLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View Case Study
                      </a>
                    </Button>
                  )}
                  {project.prototypeLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        View Prototype
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
