import { motion } from "framer-motion";
import { education } from "@/constants/portfolio-data";
import SectionTag from "../SectionTag";

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <SectionTag label="Education" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        Academic<br /><span className="text-gradient-primary">Background</span>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-lg p-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <p className="font-mono text-xs text-primary tracking-[0.05em] mb-1">{edu.school}</p>
                                    <h3 className="font-display text-xl text-foreground">{edu.degree}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">{edu.description}</p>
                                    {edu.tags && (
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {edu.tags.map((tag) => (
                                                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 bg-background/40 border border-border/30 rounded-sm text-foreground/70">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="font-mono text-xs text-muted-foreground md:text-right whitespace-nowrap">
                                    {edu.period}
                                    {edu.current && (
                                        <span className="block mt-1 text-primary">Current</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};