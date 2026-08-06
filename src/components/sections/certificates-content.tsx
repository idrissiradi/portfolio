import { certificates } from "@/constants/portfolio-data";

export function CertificatesContent() {
  return (
    <div>
      {certificates.map((cert, i) => (
        <div key={cert.title} className={`py-3.5 ${i > 0 ? "border-t border-border" : "pt-1"}`}>
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              className="text-base font-semibold hover:text-primary"
            >
              {cert.title} ↗
            </a>
          ) : (
            <div className="text-base font-semibold">{cert.title}</div>
          )}
          <div className="mt-1 font-mono text-[13px] text-muted-foreground">
            {cert.issuer} · {cert.date}
          </div>
          {cert.description && (
            <p className="mt-1.5 max-w-[560px] text-sm leading-relaxed text-foreground/75">
              {cert.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
