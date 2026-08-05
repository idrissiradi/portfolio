import { certificates } from "@/lib/data";

export function CertificatesContent() {
  return (
    <div>
      {certificates.map((cert, i) => (
        <div key={cert.title} className={`py-3.5 ${i > 0 ? "border-t border-border" : "pt-1"}`}>
          <div className="text-[15px] font-semibold">{cert.title}</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            {cert.issuer} · {cert.year}
          </div>
        </div>
      ))}
    </div>
  );
}
