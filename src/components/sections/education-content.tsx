import { education } from "@/lib/data";

export function EducationContent() {
  return (
    <div>
      {education.map((edu, i) => (
        <div key={edu.school} className={`py-3.5 ${i > 0 ? "border-t border-border" : "pt-1"}`}>
          <div className="text-[15px] font-semibold">{edu.school}</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            {edu.period} · {edu.location}
          </div>
          <p className="mt-1.5 max-w-[560px] text-[13px] leading-relaxed text-foreground/75">
            {edu.degree}.
          </p>
        </div>
      ))}
    </div>
  );
}
