import { ExternalLink, Sparkles, FileText, Play, Zap, Cpu, Database, Workflow, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const projects = [
  {
    featured: true,
    title: "Myntra SmartFit AI – Virtual Try-On & Smart Size Recommendation",
    category: "Product Management • Case-study prototype • Proposed MVP",
    description:
      "SmartFit AI is a case-study prototype, not a live production product. The proposed MVP combines measurement-to-size recommendation with a virtual mannequin / try-on. Recommended and alternative sizes, a confidence score, an explanation, and a 3D mannequin preview are intended prototype outputs, not verified fit advice.",
    whyBuilt:
      "Secondary research reviewed public comments/reviews on Reddit, Google Play Store, YouTube, and Instagram. This informed the hypothesis that fit uncertainty affects shopper confidence; that hypothesis is unvalidated.",
    solution:
      "The proposed scope pairs measurement-based sizing guidance with a visual preview to explore fit uncertainty. This is a scope choice / hypothesis, not a proven solution. The linked PRD and validation plan are newly documented case-study artifacts, not historical decision records.",
    highlights: [
      "Intended: measurement-to-size recommendation",
      "Intended: recommended and alternative sizes",
      "Intended: confidence score and explanation",
      "Intended: 3D mannequin / try-on preview",
    ],
    demonstrates: [
      "AI product design from problem to working prototype",
      "Prompt engineering & responsible AI planning",
      "No-code automation with real backend integration",
      "Metrics, experimentation & GTM thinking",
    ],
    outcomes: [
      "More than 10 people tried the prototype",
      "Detailed feedback is not currently documented",
      "Measured outcomes are not currently documented",
      "FCCL experiment proposed; not run, no results available",
    ],
    status: "Case-study Prototype · Unvalidated",
    link: "https://smartfit-style-ai.lovable.app",
    prototypeLink: "https://smartfit-style-ai.lovable.app",
    caseStudyLink: "",
    ctaLabel: "Try Live Prototype",
    artifactLink: "#smartfit-prd",
    artifactLabel: "Read SmartFit PRD & artifacts",
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
    title: "AI Productify — AI-Assisted PRD & Product Roadmap Generator",
    description:
      "An AI-assisted product drafting project. View an illustrative PRD and roadmap sample with user stories, acceptance criteria, RICE / MoSCoW prioritization, and a phased roadmap. AI drafts were manually reviewed; no time-saving metric is available. The sample is not a saved historical output or a client project.",
    whyBuilt:
      "Explore how AI can support structured product drafting while keeping assumptions, prioritization, and validation subject to human review. This does not establish measured productivity gains.",
    highlights: [
      "Illustrative generic input and PRD structure",
      "User stories with testable acceptance criteria",
      "RICE inputs marked unknown; MoSCoW scope choices",
      "Roadmap without committed dates or measured results",
    ],
    demonstrates: [
      "Structured product drafting and manual review",
      "Transparent assumptions and limitations",
      "Proposed prioritization and validation planning",
    ],
    link: "https://ai-productify--Yashgarg1212.replit.app",
    prototypeLink: "",
    caseStudyLink: "",
    tags: ["HTML", "CSS", "JavaScript", "AI APIs"],
    artifactLink: "#prd-generator-example",
    artifactLabel: "Read illustrative PRD & roadmap",
  },
  {
    title: "Forage Product Management Job Simulation",
    description:
      "Completed Forage Academy's Product Management Job Simulation. In the simulation I developed an understanding of key performance indicators and selected the most appropriate KPIs for assessing business questions related to a strategy RPG mobile game. I prioritized player insights for development, marketing, and senior leadership stakeholders, and created a detailed project plan that broke the development of a data-driven stakeholder presentation into clear, actionable steps.",
    whyBuilt:
      "I wanted to strengthen my product management fundamentals by working through real-world tasks around KPI selection, stakeholder communication, and project planning in a structured simulation environment.",
    highlights: [
      "Selected the most appropriate KPIs for assessing business questions",
      "Prioritized player insights for development, marketing, and senior leadership stakeholders",
      "Created a detailed project plan for a data-driven stakeholder presentation",
      "Broke complex work into clear, actionable steps",
    ],
    demonstrates: [
      "KPI selection and product performance analysis",
      "Stakeholder prioritization and communication",
      "Structured project planning",
      "Data-driven presentation development",
    ],
    link: "",
    prototypeLink: "",
    caseStudyLink: "",
    tags: ["Product Management", "KPIs", "Stakeholder Management", "Project Planning"],
  },
  {
    title: "Commercial Project Manager Job Simulation",
    description:
      "Completed a job simulation as a Commercial Project Manager for a $100M+ light rail extension project. I analyzed project performance using Work Breakdown Structures (WBS) and Key Performance Indicators (KPIs) to identify risks and opportunities, calculated an Estimate at Completion (EAC) to forecast financial outcomes and evaluate cost performance, and delivered a professional stakeholder report summarizing findings, risks, and recommendations for leadership.",
    whyBuilt:
      "I wanted to build hands-on project management experience around large-scale commercial projects, financial forecasting, and stakeholder reporting.",
    highlights: [
      "Managed a $100M+ light rail extension project simulation",
      "Analyzed project performance using WBS and KPIs",
      "Calculated Estimate at Completion (EAC) for financial forecasting",
      "Delivered a professional stakeholder report with risks and recommendations",
    ],
    demonstrates: [
      "Project planning and KPI analysis",
      "Financial forecasting and cost performance evaluation",
      "Stakeholder communication and reporting",
      "Risk identification and opportunity analysis",
    ],
    link: "",
    prototypeLink: "",
    caseStudyLink: "",
    tags: ["Project Management", "KPI Analysis", "Financial Forecasting", "Stakeholder Communication"],
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

        <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 border-l-2 border-primary pl-5">
          <div>
            <h3 className="font-heading text-xl font-semibold">Product Case Studies & Artifacts</h3>
            <p className="text-muted-foreground text-sm mt-1">SmartFit PRD, journey, walkthrough, illustrative PRD sample, and proposed FCCL experiment.</p>
          </div>
          <Button asChild variant="outline" className="h-auto min-h-10 whitespace-normal py-2">
            <a href="#product-artifacts"><FileText aria-hidden="true" /> Explore product artifacts</a>
          </Button>
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
                     Proposed solution / scope hypothesis
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    {project.featured ? "Prototype intent" : project.artifactLink ? "Illustrative artifact includes" : "Key Features"}
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
                    {project.featured ? "Evidence & validation status" : "What It Demonstrates"}
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
                  {project.artifactLink && (
                    <Button variant="outline" size="sm" asChild className="h-auto min-h-9 whitespace-normal py-2">
                      <a href={project.artifactLink}>
                        <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
                        {project.artifactLabel}
                      </a>
                    </Button>
                  )}
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
