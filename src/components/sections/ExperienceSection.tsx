import { experiences } from "@/constants/portfolio-data";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 md:px-8 bg-card/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        <span className="text-gradient-primary">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Projects and roles that shaped my development career
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title + exp.company}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative pl-8 md:pl-0 pb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                        >
                            {/* Timeline dot */}
                            <div className={`absolute left-0 md:left-auto ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} top-2 w-3 h-3 rounded-full ${exp.current ? 'bg-primary glow-primary' : 'bg-muted-foreground/50'} border-2 border-background`} />

                            <div className={`glass-card rounded-xl p-6 hover:border-primary/30 transition-all ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                                {exp.current && (
                                    <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary mb-2">
                                        Current
                                    </span>
                                )}
                                <h3 className="font-display text-2xl text-foreground">{exp.title}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mt-1">{exp.period} . {exp.type}</p>
                                <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                                <p className="text-secondary-foreground mt-3 text-sm leading-relaxed">{exp.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    {exp.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};