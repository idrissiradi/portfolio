import { Star } from "lucide-react";
import { projects } from "@/constants/portfolio-data";

export function ProjectsContent() {
  return (
    <div>
      {projects.map((project, i) => (
        <div
          key={project.title}
          className={`py-4 ${i > 0 ? "border-t border-border" : "pt-1"}`}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            {project.link ? (
              <a
                href={project.link}
                className="text-base font-semibold text-foreground hover:text-primary"
              >
                {project.title} ↗
              </a>
            ) : (
              <div className="text-base font-semibold">{project.title}</div>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 font-mono text-xs text-[oklch(0.72_0.12_75)]">
                <Star className="h-3 w-3 fill-current" /> Featured
              </span>
            )}
          </div>

          <p className="mt-2 max-w-[600px] text-[15px] leading-relaxed text-foreground/80">
            {project.description}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] text-muted-foreground">
            {project.metrics.slice(0, 3).map((metric) => (
              <span key={metric.key}>
                <b className="font-semibold text-primary">{metric.value}</b> {metric.key.toLowerCase()}
              </span>
            ))}
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
