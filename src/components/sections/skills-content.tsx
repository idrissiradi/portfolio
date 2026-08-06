import { skillCategories } from "@/constants/portfolio-data";

export function SkillsContent() {
  return (
    <div className="space-y-6 pt-1">
      {skillCategories.map((group) => (
        <div key={group.title}>
          <div className="mb-2.5 text-base font-semibold">{group.title}</div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="border border-border px-2.5 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-primary hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
