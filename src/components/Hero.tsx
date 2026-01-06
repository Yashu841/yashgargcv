import { ArrowDown, Mail, Linkedin, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile.jpg";

const Hero = () => {
  const resumePath = "/Yash_Garg-Resume.pdf";

  // Open resume via Google's Drive-style viewer (more reliable than built-in PDF viewers on some devices)
  const resumeViewerUrl =
    typeof window !== "undefined"
      ? `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
          `${window.location.origin}${resumePath}`
        )}`
      : resumePath;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-glow opacity-60 animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow opacity-40 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="container relative z-10 px-6 text-center">
        <div className="animate-slide-up">
          {/* Profile Photo */}
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow" />
              <img
                src={profilePhoto}
                alt="Yash Garg - Aspiring Product Manager"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
            ASPIRING PRODUCT MANAGER • ESPORTS VETERAN
          </p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="text-foreground">YASH</span>
            <br />
            <span className="text-gradient">GARG</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Aspiring product manager with a unique blend of analytical thinking and competitive esports
            experience. Ready to bring strategic product excellence to your organization.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">Hapur, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">yashgarg841@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="group" asChild>
              <a href="mailto:yashgarg841@gmail.com" aria-label="Email Yash Garg">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/yash-garg-79b209325"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Yash Garg LinkedIn"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={resumeViewerUrl} target="_blank" rel="noopener noreferrer" aria-label="View resume">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
