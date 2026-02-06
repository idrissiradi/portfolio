import { certificates } from "@/constants/portfolio-data";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";


const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-24 px-4 md:px-8 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        <span className="text-gradient-primary">Certificates</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Professional certifications and achievements
                    </p>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-2">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={cert.title}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group cursor-pointer"
                        >
                            <div className="flex gap-4">
                                <div className="p-3 rounded-xl bg-primary/20 h-fit group-hover:bg-primary/30 transition-colors">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cert.description}</p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                                        <span className="text-muted-foreground">•</span>
                                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;