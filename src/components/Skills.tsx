import { skills, skillCategories, type Skill } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";
import { getSkillIcons, type SkillIconData } from "@/lib/skill-icons";

function SkillBadge({ skill }: { skill: SkillIconData }) {
  // Determine if the background is dark to choose text color
  const hex = skill.color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.6 ? "#000000" : "#FFFFFF";

  return (
    <span
      className="skill-badge inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium"
      style={
        {
          backgroundColor: skill.color,
          color: textColor,
          "--badge-color": skill.color,
        } as React.CSSProperties
      }
    >
      {skill.svgPath && (
        <svg
          role="img"
          viewBox={skill.viewBox}
          className="skill-badge-icon size-4 shrink-0"
          fill={textColor}
        >
          <path
            d={skill.svgPath}
            fillRule={skill.fillRule}
            clipRule={skill.fillRule}
          />
        </svg>
      )}
      {skill.name}
    </span>
  );
}

export default function Skills() {
  const iconData = getSkillIcons(skills);
  const iconMap = new Map(iconData.map((d) => [d.name, d]));

  const HIDDEN_CATEGORIES: Skill["category"][] = ["frontend", "ai_finetune"];

  const grouped = skills.reduce(
    (acc, skill) => {
      if (HIDDEN_CATEGORIES.includes(skill.category)) return acc;
      (acc[skill.category] ??= []).push(skill);
      return acc;
    },
    {} as Record<Skill["category"], Skill[]>,
  );

  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Skills
        </h2>
        <h3 className="mb-6 text-3xl font-bold tracking-tight">Tech Stack</h3>
        <Separator className="mb-10" />

        <div className="grid gap-8 sm:grid-cols-2">
          {(Object.entries(grouped) as [Skill["category"], Skill[]][]).map(
            ([category, items]) => (
              <div key={category}>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {skillCategories[category]}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skill={iconMap.get(skill.name)!}
                    />
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
