import { skillGroups } from "@/lib/data";

export function SkillsContent() {
  const allSkills = skillGroups.flatMap((group) => group.items);

  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {allSkills.map((skill) => (
        <span
          key={skill}
          className="border border-border px-2.5 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-primary hover:text-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
