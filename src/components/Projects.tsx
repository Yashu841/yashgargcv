import { ExternalLink, Sparkles, FileText, Play, Zap, Cpu, Database, Workflow, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const projects = [
  {
    featured: true,
    title: "Myntra SmartFit AI – Virtual Try-On & Smart Size Recommendation",
    category: "AI Product Management • Generative AI • Recommendation System • No-Code AI • 3D Virtual Try-On",
    description:
      "Designed and built an AI-powered virtual try-on prototype for Myntra that creates a personalized digital mannequin using a user's body measurements and style preferences. The system recommends the best clothing size, visualizes how garments fit on different body types, and collects user feedback to continuously improve recommendation quality.",
    whyBuilt:
      "One of the biggest reasons for returns in fashion e-commerce is incorrect sizing. Users struggle to understand how clothes will fit based only on product images and size charts, leading to uncertainty, lower conversions, and higher return rates.",
    solution:
      "SmartFit AI creates a personalized virtual mannequin using height, weight, gender, body type, and preferred fit. The AI recommends the most suitable clothing size, visualizes the selected outfit on a personalized avatar, explains the recommendation, and captures post-purchase feedback to improve future recommendations.",
    highlights: [
      "AI-powered personalized size recommendations",
      "Virtual try-on using a morphable 3D mannequin",
      "Real-time body customization & outfit visualization",
      "Confidence score with recommendation reasoning",
      "Alternative size suggestions & user feedback loop",
      "End-to-end AI recommendation pipeline",
    ],
    demonstrates: [
      "AI product design from problem to working prototype",
      "Prompt engineering & responsible AI planning",
      "No-code automation with real backend integration",
      "Metrics, experimentation & GTM thinking",
    ],
    techStack: [
      { group: "Frontend", items: ["Lovable", "React", "TypeScript", "Tailwind CSS"] },
      { group: "AI", items: ["OpenRouter API", "GPT-3.5 Turbo"] },
      { group: "Automation", items: ["Make.com"] },
      { group: "Database", items: ["Supabase"] },
    ],
    architecture: [
      { icon: Sparkles, label: "User Input" },
      { icon: Workflow, label: "Make.com Workflow" },
      { icon: Cpu, label: "OpenRouter AI" },
      { icon: Layers, label: "Recommendation Engine" },
      { icon: Database, label: "Supabase Storage" },
      { icon: Zap, label: "Virtual Try-On UI" },
    ],
    outcomes: [
      "Working end-to-end AI prototype",
      "Automated recommendation workflow",
      "Personalized size recommendation engine",
      "Real-time feedback collection",
      "AI-powered recommendation explanations",
      "Integrated Supabase backend",
    ],
    status: "Completed Prototype",
    link: "https://smartfit-style-ai.lovable.app",
    prototypeLink: "https://smartfit-style-ai.lovable.app",
    caseStudyLink: "",
    ctaLabel: "Try Live Prototype",
    tags: [
      "Product Management",
      "AI Product Design",
      "Generative AI",
      "Recommendation Systems",
      "UX Design",
      "Prompt Engineering",
      "API Integration",
      "Workflow Automation",
      "Database Design",
      "Responsible AI",
    ],
  },
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
    prototypeLink: "https://stitch.withgoogle.com/projects/15251693336887082855",
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

  let externalLinkTarget: "_self" | "_blank" = "_blank";
  if (typeof window !== "undefined") {
    try {
      externalLinkTarget = window.self !== window.top ? "_self" : "_blank";
    } catch {
      externalLinkTarget = "_self";
    }
  }

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
          {projects.map((project: any) => (
            <div
              key={project.title}
              className={`card-gradient p-8 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                project.featured
                  ? "border-primary/40 hover:border-primary shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {project.featured && (
                <>
                  <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none" />
                  <div className="relative z-10 flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-primary to-primary/70 text-primary-foreground uppercase tracking-wider">
                      ★ Featured
                    </span>
                    {project.status && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.status}
                      </span>
                    )}
                  </div>
                  {project.category && (
                    <p className="relative z-10 text-xs md:text-sm text-muted-foreground tracking-wide mb-4">
                      {project.category}
                    </p>
                  )}
                </>
              )}
              <div className="relative z-10">
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
                  {project.featured ? "Problem" : "Why I Built It"}
                </h4>
                <p className="text-sm text-muted-foreground italic">
                  {project.whyBuilt}
                </p>
              </div>

              {project.solution && (
                <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              )}

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
                    {project.featured ? "Key Outcomes" : "What It Demonstrates"}
                  </h4>
                  <ul className="space-y-2">
                    {(project.featured ? project.outcomes : project.demonstrates).map((item: string, index: number) => (
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

              {project.techStack && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.techStack.map((group: any) => (
                      <div
                        key={group.group}
                        className="p-3 rounded-lg bg-secondary/40 border border-border/50"
                      >
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                          {group.group}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item: string) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 text-xs rounded-md bg-background/60 text-muted-foreground border border-border/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.architecture && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Architecture
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.architecture.map((step: any, i: number) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.label} className="flex items-center gap-2">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20">
                            <Icon size={14} className="text-primary" />
                            <span className="text-xs font-medium text-foreground">
                              {step.label}
                            </span>
                          </div>
                          {i < project.architecture.length - 1 && (
                            <span className="text-primary/60 text-xs">→</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

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
                    <Button
                      variant={project.featured ? "default" : "outline"}
                      size="sm"
                      asChild
                    >
                      <a href={project.link} target={externalLinkTarget} rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.ctaLabel || "View Project"}
                      </a>
                    </Button>
                  )}
                  {project.caseStudyLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.caseStudyLink} target={externalLinkTarget} rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View Case Study
                      </a>
                    </Button>
                  )}
                  {project.prototypeLink && project.prototypeLink !== project.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.prototypeLink} target={externalLinkTarget} rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        View Prototype
                      </a>
                    </Button>
                  )}
                </div>
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
