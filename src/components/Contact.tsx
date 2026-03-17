import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Contact
        </h2>
        <h3 className="mb-6 text-3xl font-bold tracking-tight">Get In Touch</h3>
        <Separator className="mx-auto mb-8 max-w-xs" />

        <div className="flex flex-wrap items-center justify-center gap-4">
          {profile.github && (
            <Button variant="outline" size="lg" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {profile.email && (
            <Button variant="outline" size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {profile.email}
              </a>
            </Button>
          )}
          {profile.linkedin && (
            <Button variant="outline" size="lg" asChild>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
