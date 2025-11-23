import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/constants/portfolio-data";

export const CertificateSection = () => {
    return (
        <section id="certificates" className="w-full py-32 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Certificates</h2>
                <p className="text-muted-foreground text-xl mb-20 max-w-3xl">
                    Professional certifications that validate my skills and knowledge
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <Card key={index} className="p-6 border-border hover:bg-accent/50 transition-all hover-scale">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold">{cert.title}</h3>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                            <p className="text-sm font-medium text-muted-foreground mb-2">{cert.issuer}</p>
                            <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                            <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};