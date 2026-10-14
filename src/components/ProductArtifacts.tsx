import { ArrowDownRight, ArrowUpRight, FileText, Route, Play, Layers, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const artifacts = [
  { id: "smartfit-prd", title: "SmartFit AI PRD & problem framing", label: "Case-study artifact / proposed plan", icon: FileText },
  { id: "smartfit-journey", title: "Product flow / user journey", label: "Proposed MVP journey", icon: Route },
  { id: "smartfit-walkthrough", title: "Prototype walkthrough", label: "Explore the case-study prototype", icon: Play },
  { id: "prd-generator-example", title: "AI-Assisted PRD & Product Roadmap Generator", label: "Illustrative sample artifact", icon: Layers },
  { id: "fccl-experiment", title: "FCCL metric & experiment plan", label: "Proposed experiment · not run", icon: FlaskConical },
];

const journey = [
  ["Fit uncertainty", "An online apparel shopper wants to understand which size may fit before purchasing."],
  ["Measurement input", "Proposed input: measurements and fit preference. Input quality and measurement guidance need validation."],
  ["Recommendation", "Intended output: a recommended size, alternative sizes, confidence score, and explanation."],
  ["Visual consideration", "Intended output: a 3D mannequin / try-on preview to support the shopper’s decision, not certify actual fit."],
  ["Purchase decision & follow-up", "The shopper decides whether to proceed. Purchase and return measurement would need a future consent-aware integration."],
];

const headingClass = "font-heading text-2xl md:text-3xl font-bold mb-3";
const bodyClass = "text-muted-foreground leading-relaxed";
const articleClass = "scroll-mt-28 border-t border-border py-10 md:py-14";
const labelClass = "text-xs font-semibold uppercase text-primary mb-3";

const ProductArtifacts = () => {
  let externalTarget: "_self" | "_blank" = "_blank";
  try {
    externalTarget = window.self !== window.top ? "_self" : "_blank";
  } catch {
    externalTarget = "_self";
  }

  return (
    <section id="product-artifacts" aria-labelledby="artifacts-heading" className="relative py-20 md:py-24 scroll-mt-20">
      <div className="container px-6 max-w-5xl">
        <p className={labelClass}>Product management evidence</p>
        <h2 id="artifacts-heading" className="font-heading text-3xl md:text-5xl font-bold mb-5">
          Product Case Studies <span className="text-gradient">& Artifacts</span>
        </h2>
        <p className={`${bodyClass} max-w-3xl mb-8`}>
          SmartFit AI and an AI-assisted PRD sample: problem framing, proposed scope, and validation plans.
          These newly documented case-study artifacts are not records of historical product decisions or measured business results.
        </p>

        <nav aria-label="Product case study artifacts" className="grid sm:grid-cols-2 gap-3 mb-10">
          {artifacts.map(({ id, title, label, icon: Icon }, index) => (
            <a key={id} href={`#${id}`} className="card-gradient rounded-lg border border-border p-5 flex gap-4 items-start hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors">
              <Icon className="text-primary shrink-0 mt-1" size={22} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground mb-2">0{index + 1} · {label}</p>
                <h3 className="font-heading font-semibold text-lg leading-snug">{title}</h3>
              </div>
              <ArrowDownRight size={18} className="text-primary shrink-0 mt-1" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <aside aria-label="SmartFit evidence status" className="border-l-2 border-primary pl-5 mb-10">
          <h3 className="font-heading text-xl font-semibold mb-2">Evidence status — case-study prototype, not a production product</h3>
          <p className={bodyClass}>
            Secondary research reviewed public comments/reviews on Reddit, Google Play Store, YouTube, and Instagram.
            This informed the hypothesis that fit uncertainty affects shopper confidence; the hypothesis is unvalidated.
            More than 10 people tried the prototype. Detailed feedback and measured outcomes are not currently documented.
          </p>
        </aside>

        <article id="smartfit-prd" aria-labelledby="smartfit-prd-title" className={articleClass}>
          <p className={labelClass}>01 · Case-study artifact / proposed plan</p>
          <h3 id="smartfit-prd-title" className={headingClass}>SmartFit AI PRD & problem framing</h3>
          <p className={`${bodyClass} mb-7`}>Newly documented PRD summary. Scope choices below are hypotheses, not proven solutions.</p>
          <dl className="grid md:grid-cols-[180px_1fr] gap-x-8 gap-y-5">
            <dt className="font-semibold">Problem statement</dt>
            <dd className={bodyClass}>Online apparel shoppers may be uncertain about fit when choosing a size. Whether this uncertainty affects confidence or purchase conversion remains unvalidated.</dd>
            <dt className="font-semibold">Target user</dt>
            <dd className={bodyClass}>An online apparel shopper uncertain about fit.</dd>
            <dt className="font-semibold">Hypothesis</dt>
            <dd className={bodyClass}>Measurement-based sizing guidance plus a visual preview may improve shopper confidence. No causal effect or business outcome has been established.</dd>
            <dt className="font-semibold">User journey</dt>
            <dd className={bodyClass}>Fit uncertainty → measurement input → recommendation → mannequin preview → purchase decision. <a className="text-primary underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring" href="#smartfit-journey">Read the proposed user journey</a>.</dd>
            <dt className="font-semibold">MVP scope</dt>
            <dd className={bodyClass}>Measurement-to-size recommendation plus virtual mannequin / try-on. The rationale is a scope choice: pair sizing guidance with a visual aid to explore uncertainty. Intended prototype outputs are recommended and alternative sizes, a confidence score, an explanation, and a 3D mannequin preview; availability and accuracy are not established by this artifact.</dd>
            <dt className="font-semibold">Out of scope / unknowns</dt>
            <dd className={bodyClass}>A production checkout integration, verified garment-level fit accuracy, confidence-score calibration, broad catalog coverage, and measured return reduction are outside this proposed MVP or remain unknown. No competitor comparison or implementation specification is asserted here.</dd>
            <dt className="font-semibold">Risks</dt>
            <dd className={bodyClass}>Inaccurate measurements or sizing guidance, misleading confidence scores, over-trust in a visual preview, body-data privacy, and insufficient representation across body types. Accessibility and the clarity of input guidance also need evaluation.</dd>
            <dt className="font-semibold">Success metrics</dt>
            <dd className={bodyClass}>Proposed primary metric: FCCL, a conversion-rate difference in percentage points. Supporting measures: recommendation adoption and completion. Guardrail: post-purchase return rate. No baselines, targets, or results are available.</dd>
            <dt className="font-semibold">Validation plan</dt>
            <dd className={bodyClass}>Document consented usability feedback on input clarity, recommendation comprehension, and the mannequin preview. Check recommendation accuracy and uncertainty communication before considering a controlled purchase-conversion experiment. Predefine measurement and sample requirements; do not treat prototype use as validation.</dd>
          </dl>
        </article>

        <article id="smartfit-journey" aria-labelledby="journey-title" className={articleClass}>
          <p className={labelClass}>02 · Proposed MVP journey</p>
          <h3 id="journey-title" className={headingClass}>Product flow / user journey</h3>
          <p className={`${bodyClass} mb-7`}>An intended flow, not a claim that every step is implemented in the public prototype.</p>
          <ol className="space-y-6">
            {journey.map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="flex items-center justify-center h-9 w-9 shrink-0 rounded-full border border-primary/40 text-primary font-semibold" aria-hidden="true">{i + 1}</span>
                <div><h4 className="font-semibold mb-1">{title}</h4><p className={bodyClass}>{text}</p></div>
              </li>
            ))}
          </ol>
        </article>

        <article id="smartfit-walkthrough" aria-labelledby="walkthrough-title" className={articleClass}>
          <p className={labelClass}>03 · Case-study prototype walkthrough</p>
          <h3 id="walkthrough-title" className={headingClass}>Explore SmartFit / SmartStyle AI</h3>
          <p className={`${bodyClass} mb-5`}>Use the public prototype to inspect the experience. This is not a live production product, and this walkthrough is not proof of feature completeness.</p>
          <div className="flex flex-wrap gap-3 mb-7">
            <Button asChild className="h-auto min-h-12 whitespace-normal text-left py-3">
              <a href="https://id-preview--8f87cb89-015a-4743-8768-2952b739dd46.lovable.app" target={externalTarget} rel="noopener noreferrer">Open SmartStyle AI prototype <ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="outline" className="h-auto min-h-12 whitespace-normal text-left py-3">
              <a href="https://smartfit-style-ai.lovable.app" target={externalTarget} rel="noopener noreferrer">Open existing published SmartFit app <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li>Open either prototype link and inspect the available measurement / fit controls.</li>
            <li>If inputs are available, use example measurements rather than sensitive personal information; inspect the guidance and required fields.</li>
            <li>If a recommendation is available, inspect the size options, confidence score, and explanation. Treat them as prototype outputs, not verified fit advice.</li>
            <li>Inspect the mannequin / try-on preview if available. Consider whether the visual makes the recommendation understandable without implying real-world accuracy.</li>
            <li>Compare what is visible with the proposed PRD and note missing steps or questions. Any unavailable feature remains unverified.</li>
          </ol>
        </article>

        <article id="prd-generator-example" aria-labelledby="generator-title" className={articleClass}>
          <p className={labelClass}>04 · Illustrative sample artifact</p>
          <h3 id="generator-title" className={headingClass}>AI-Assisted PRD & Product Roadmap Generator</h3>
          <p className={`${bodyClass} mb-6`}>A representative input and generated-PRD structure, not a saved historical output or a client project. AI drafts were manually reviewed; no time-saving metric is available. The sample below is illustrative and does not establish the current app’s features.</p>
          <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal py-2 mb-8">
            <a href="https://gold-mine-for-p-ms--Yashgarg1212.replit.app" target={externalTarget} rel="noopener noreferrer">
              Open AI-Assisted PRD Generator <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <div className="border-l-2 border-primary pl-5 mb-8">
            <h4 className="font-semibold mb-2">Generic example input</h4>
            <p className={bodyClass}>“Draft a PRD for a personal task planner. Target user: an individual tracking work tasks. Problem hypothesis: users may lose track of priorities. Proposed scope: create tasks, set due dates, and view upcoming work. Keep estimates and outcomes marked as unknown.”</p>
          </div>
          <h4 className="font-heading text-xl font-semibold mb-3">Illustrative generated PRD structure</h4>
          <dl className="grid md:grid-cols-[180px_1fr] gap-x-8 gap-y-4 mb-8">
            <dt className="font-semibold">Problem & user</dt><dd className={bodyClass}>An individual managing work tasks may need a clearer view of upcoming priorities. This problem needs user validation.</dd>
            <dt className="font-semibold">Goal & scope</dt><dd className={bodyClass}>Explore task creation, due-date editing, and an upcoming-task view. Shared workspaces and calendar integrations are out of this illustrative MVP.</dd>
            <dt className="font-semibold">Assumptions & risks</dt><dd className={bodyClass}>Priority confusion is a hypothesis. Reminder preferences, date handling, accessibility, and data retention need clarification.</dd>
            <dt className="font-semibold">Measurement plan</dt><dd className={bodyClass}>Propose task-creation completion and repeat use; define events and a validation plan before assigning targets. No data or results are asserted.</dd>
          </dl>
          <h4 className="font-heading text-xl font-semibold mb-4">User stories & acceptance criteria</h4>
          <ul className="space-y-5 mb-8">
            <li><p className="font-semibold mb-1">As an individual, I want to create a task so I can track work.</p><p className={bodyClass}>Acceptance criteria: a title is required; blank input shows an accessible error; a valid submitted task appears in the task list.</p></li>
            <li><p className="font-semibold mb-1">As an individual, I want to set or edit a due date so I can plan upcoming work.</p><p className={bodyClass}>Acceptance criteria: a date is optional and editable; invalid dates show a clear error; the updated date is reflected in the task view.</p></li>
            <li><p className="font-semibold mb-1">As an individual, I want to view upcoming tasks so I can decide what to do next.</p><p className={bodyClass}>Acceptance criteria: dated tasks are ordered by due date; undated tasks remain accessible; an empty view displays a clear empty state.</p></li>
          </ul>
          <h4 className="font-heading text-xl font-semibold mb-3">RICE / MoSCoW prioritization</h4>
          <p className={`${bodyClass} mb-4`}>RICE = (Reach × Impact × Confidence) ÷ Effort. All four inputs are unknown here, so no numeric score or evidence-based ranking is claimed. Gather reach, impact, confidence, and effort estimates before using RICE.</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left">
              <caption className="text-left text-muted-foreground mb-3">Illustrative MoSCoW scope choices — not validated priorities</caption>
              <thead><tr className="border-b border-border"><th scope="col" className="py-3 pr-4">Feature</th><th scope="col" className="py-3 pr-4">MoSCoW</th><th scope="col" className="py-3">Scope rationale</th></tr></thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border"><th scope="row" className="font-medium py-3 pr-4">Task creation</th><td className="pr-4">Must</td><td>Core task-tracking flow</td></tr>
                <tr className="border-b border-border"><th scope="row" className="font-medium py-3 pr-4">Due dates & upcoming view</th><td className="pr-4">Should</td><td>Explore planning support</td></tr>
                <tr className="border-b border-border"><th scope="row" className="font-medium py-3 pr-4">Reminders</th><td className="pr-4">Could</td><td>Needs preference research</td></tr>
                <tr><th scope="row" className="font-medium py-3 pr-4">Shared workspaces</th><td className="pr-4">Won’t (MVP)</td><td>Keep the example individual-focused</td></tr>
              </tbody>
            </table>
          </div>
          <h4 className="font-heading text-xl font-semibold mb-3">Illustrative roadmap — no committed dates</h4>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Discovery:</strong> validate the problem and clarify task and date expectations.</li>
            <li><strong className="text-foreground">MVP exploration:</strong> prototype task creation, due dates, and the upcoming view; review acceptance criteria.</li>
            <li><strong className="text-foreground">Validation & iteration:</strong> gather usability feedback, define event measurement, and reconsider priorities with evidence before extending scope.</li>
          </ol>
          <p className={`${bodyClass} mt-6`}><strong className="text-foreground">Manual review:</strong> check assumptions, story clarity, testable criteria, unsupported claims, and feasibility. AI output is a draft, not validated product strategy.</p>
        </article>

        <article id="fccl-experiment" aria-labelledby="fccl-title" className={articleClass}>
          <p className={labelClass}>05 · Proposed experiment · not run · no results available</p>
          <h3 id="fccl-title" className={headingClass}>FCCL metric definition & experiment plan</h3>
          <div className="border-l-2 border-primary pl-5 my-6">
            <p className="font-heading text-xl font-semibold leading-relaxed">FCCL = conversion rate of exposed group − conversion rate of comparison group</p>
            <p className={`${bodyClass} mt-3`}>The conversion-rate difference between SmartFit recommendation sessions and comparable sessions without recommendations, expressed in <strong className="text-foreground">percentage points</strong> — not a relative percentage increase.</p>
          </div>
          <p className={`${bodyClass} mb-6`}>For each group, conversion rate is eligible sessions with the predefined purchase event divided by total eligible sessions in that group. Multiply the difference by 100 when rates are expressed as proportions. Exposure, attribution, and denominators must be fixed before running.</p>
          <ol className="list-decimal pl-6 space-y-4 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Define eligibility and purchase:</strong> specify eligible sessions, the purchase event, and attribution window in advance, including how repeated sessions and exclusions are handled.</li>
            <li><strong className="text-foreground">Assign consistently:</strong> choose a user- or session-cohort assignment unit in advance and keep assignments consistent to reduce cross-group contamination. Do not compare self-selected adopters with all other traffic.</li>
            <li><strong className="text-foreground">Make groups comparable:</strong> compare equivalent time windows and traffic sources; document recommendation exposure consistently. Prefer randomized assignment where feasible and disclose limitations otherwise.</li>
            <li><strong className="text-foreground">Predefine the experiment:</strong> set sample-size / power requirements, the effect size to detect, duration, and analysis rules before running. Baseline data and estimates are not currently available; no sample size or duration is claimed.</li>
            <li><strong className="text-foreground">Monitor supporting signals and guardrail:</strong> track recommendation adoption and completion; monitor post-purchase return rate as a guardrail using a predefined return-observation window.</li>
            <li><strong className="text-foreground">Segment responsibly:</strong> segment only where sample sizes support it; predefine segments and report uncertainty rather than selecting favorable slices.</li>
          </ol>
        </article>

        <aside aria-labelledby="limitations-title" className="border-t border-border pt-10">
          <h3 id="limitations-title" className={headingClass}>Limitations / what remains unvalidated</h3>
          <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">
            <li>Secondary research informed a hypothesis, not representative or causal evidence. Source excerpts, detailed prototype feedback, and measured outcomes are not documented here.</li>
            <li>More than 10 prototype users does not establish fit accuracy, shopper confidence, purchase lift, or return reduction.</li>
            <li>Recommendation quality, confidence calibration, mannequin fidelity, privacy safeguards, and performance across body types still require evaluation.</li>
            <li>The FCCL experiment has not been run. No conversion or return-rate results are available.</li>
            <li>The PRD-generator sample is illustrative, manually reviewed, and not a historic client artifact. No time-saving metric is available.</li>
          </ul>
          <Button asChild variant="link" className="px-0 mt-6 whitespace-normal h-auto"><a href="#product-artifacts">Back to Product Case Studies & Artifacts <ArrowDownRight className="rotate-180" aria-hidden="true" /></a></Button>
        </aside>
      </div>
    </section>
  );
};

export default ProductArtifacts;