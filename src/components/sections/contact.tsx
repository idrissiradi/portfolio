import { contactInfo } from "@/lib/data";

export function Contact() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-14">
      <div className="mb-4 font-mono text-xs uppercase tracking-wide text-muted-foreground">
        Contact
      </div>
      <p className="max-w-[560px] font-sans text-[16px] leading-relaxed text-foreground/85">
        Looking for opportunities in Data Science or Machine Learning — open to on-site, remote,
        hybrid, or relocation. The fastest way to reach me is email.
      </p>
      <div className="mt-6 flex flex-wrap gap-5 font-mono text-[13px]">
        <a href={`mailto:${contactInfo.email}`} className="text-primary underline-offset-4 hover:underline">
          {contactInfo.email}
        </a>
        <a href={contactInfo.github} className="text-primary underline-offset-4 hover:underline">
          GitHub
        </a>
        <a href={contactInfo.linkedin} className="text-primary underline-offset-4 hover:underline">
          LinkedIn
        </a>
        <a href={contactInfo.cvHref} className="text-primary underline-offset-4 hover:underline">
          Download CV
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-8 text-center font-mono text-[11px] text-muted-foreground">
      © 2026 idradi.com — Built with passion and a lot of coffee ☕
    </footer>
  );
}
