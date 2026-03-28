import { experiences } from "@/constants/portfolio-data";
import { motion } from "framer-motion";
import SectionTag from "../SectionTag";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 md:px-8 bg-card/30">
            <div className="max-w-4xl mx-auto">
                <SectionTag label="History" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        Experience &<br /><span className="text-gradient-primary">Career</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative pl-8">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-linear-to-b from-primary to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative mb-12"
                        >
                            {/* Timeline dot */}
                            <div className={`absolute -left-8 top-1 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background ${exp.current ? 'shadow-[0_0_8px] shadow-primary' : ''}`} />

                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className="font-mono text-xs text-primary tracking-[0.05em]">{exp.company}</span>
                                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                            </div>
                            <h3 className="font-display text-2xl text-foreground mb-2">{exp.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {exp.tech.map((tech) => (
                                    <span key={tech} className="font-mono text-sm px-2 py-0.5 bg-background border border-border rounded-sm text-foreground/70">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};