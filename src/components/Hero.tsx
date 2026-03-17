import { profile } from "@/data/portfolio";
import { Github, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Portfolio
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto mb-8 max-w-lg whitespace-pre-line text-base text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="flex items-center justify-center gap-3">
          {profile.github && (
            <Button variant="outline" size="lg" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
