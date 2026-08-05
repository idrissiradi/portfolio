import { Star } from "lucide-react";
import { projects } from "@/lib/data";

export function ProjectsContent() {
  return (
    <div>
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`py-4 ${i > 0 ? "border-t border-border" : "pt-1"}`}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            {project.href !== "#" ? (
              <a
                href={project.href}
                className="text-[15px] font-semibold text-foreground hover:text-primary"
              >
                {project.title} ↗
              </a>
            ) : (
              <div className="text-[15px] font-semibold">{project.title}</div>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[oklch(0.72_0.12_75)]">
                <Star className="h-3 w-3 fill-current" /> Featured
              </span>
            )}
          </div>

          <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-foreground/80">
            {project.description}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            {project.metrics.slice(0, 3).map((metric) => (
              <span key={metric.label}>
                <b className="font-semibold text-primary">{metric.value}</b> {metric.label.toLowerCase()}
              </span>
            ))}
          </div>

          <div className="mt-2 font-mono text-[11px] text-muted-foreground">
            {project.stack.join(" · ")}
          </div>
        </div>
      ))}
    </div>
  );
}
