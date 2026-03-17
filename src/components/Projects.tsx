import { projects, type ContentBlock } from "@/data/portfolio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Calendar } from "lucide-react";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="underline">{part}</strong> : part,
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {block.body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{renderBold(paragraph)}</p>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-md border border-foreground/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/30 bg-muted/50">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-foreground/20 last:border-0"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="whitespace-nowrap px-4 py-2 text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "list":
      return (
        <ul className="space-y-1.5 pl-1 text-sm text-muted-foreground">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span className="leading-relaxed">{renderBold(item)}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Projects
      </h2>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold tracking-tight">Portfolio</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-foreground/40" asChild>
            <a href="#antenna-stock-analysis">ANTenna</a>
          </Button>
          <Button variant="outline" size="sm" className="border-foreground/40" asChild>
            <a href="#ddoksori-legal-chatbot">똑소리</a>
          </Button>
          <Button variant="outline" size="sm" className="border-foreground/40" asChild>
            <a href="#zipfit-housing-chatbot">ZipFit</a>
          </Button>
          <Button variant="outline" size="sm" className="border-foreground/40" asChild>
            <a href="#pubg-churn-prediction">조기 탈락 예측 ML/DL 모델링</a>
          </Button>
        </div>
      </div>
      <Separator className="mb-10" />

      <div className="flex flex-col gap-14">
        {projects.map((project, i) => (
          <Card
            key={i}
            id={project.slug}
            className="scroll-mt-20 overflow-hidden border border-foreground/40"
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.period}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Overview table */}
              {project.overview.length > 0 && (
                <div className="overflow-x-auto rounded-md border border-foreground/30">
                  <table className="w-full text-sm">
                    <tbody>
                      {project.overview.map((row, oi) => (
                        <tr
                          key={oi}
                          className="border-b border-foreground/20 last:border-0"
                        >
                          <td className="whitespace-nowrap bg-muted/50 px-4 py-2.5 font-semibold text-foreground">
                            {row.label}
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <Separator />

              {/* Sections */}
              {project.sections.map((section, si) => (
                <div key={si}>
                  <h4 className="mb-3 text-base font-semibold tracking-tight">
                    {si + 1}. {section.title}
                  </h4>

                  <div className="space-y-3">
                    {section.blocks.map((block, bi) => (
                      <BlockRenderer key={bi} block={block} />
                    ))}
                  </div>

                  {/* Subsections */}
                  {section.subSections?.map((sub, ssi) => (
                    <div key={ssi} className="mt-4">
                      <h5 className="mb-2 text-sm font-semibold text-foreground/90">
                        {si + 1}.{ssi + 1} {sub.title}
                      </h5>
                      <div className="space-y-3 pl-4 border-l-2 border-foreground/30">
                        {sub.blocks.map((block, bi) => (
                          <BlockRenderer key={bi} block={block} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <Separator />

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Visit Site
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
