import { experiences } from "@/constants/portfolio-data";

export function CareerContent() {
  return (
    <div>
      {experiences.map((job, i) => (
        <div
          key={`${job.company}-${job.period}`}
          className={`grid grid-cols-1 gap-2 py-4 sm:grid-cols-[100px_1fr] sm:gap-5 ${
            i > 0 ? "border-t border-border" : "pt-1"
          }`}
        >
          <div className="font-mono text-[13px] text-muted-foreground sm:pt-0.5">{job.period}</div>

          <div>
            <div className="text-base font-semibold">
              {job.title}
              {job.current && <span className="ml-2 font-mono text-xs text-accent">· Current</span>}
            </div>
            <div className="mt-0.5 font-mono text-sm text-primary">
              {job.company} <span className="text-muted-foreground">· {job.location}</span>
            </div>
            <p className="mt-2 max-w-[540px] whitespace-pre-line text-[15px] leading-relaxed text-foreground/80">
              {job.description}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {job.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
