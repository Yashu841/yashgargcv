import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashgarg841@gmail.com",
      href: "mailto:yashgarg841@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9193664452",
      href: "tel:+919193664452",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9193664452",
      href: "https://wa.me/919193664452",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "986, New Shivpuri, Hapur, UP 245101",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-40" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm actively seeking opportunities in product management, finance, and investment banking.
            Let's discuss how I can contribute to your organization.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-border">
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="mailto:yashgarg841@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
