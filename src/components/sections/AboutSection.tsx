import { skills, stackGroups } from "@/constants/portfolio-data";
import { motion } from "framer-motion";
import SectionTag from "../SectionTag";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <SectionTag label="About" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-12">
                        I build ML systems<br /><span className="text-gradient-primary">end to end.</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-base text-secondary-foreground leading-relaxed"
                    >
                        <p>
                            I'm a Data Science & ML Engineering student and developer based in Marrakech, Morocco. Background in full-stack development, current focus on <span className="text-foreground font-semibold">machine learning pipelines, model development, and deep learning & NLP fundamentals.</span>
                        </p>
                        <p className="text-muted-foreground">
                            Currently completing a Licence Professionnelle in AI, Machine Learning & Big Data at ENSA Khouribga, targeting a <span className="text-primary font-medium">internship from May 2026</span> in Data Science or ML Engineering. Based in Marrakech — open to remote or relocation.

                        </p>
                        {/* Quick skills grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="group glass-card rounded-xl p-3 hover:border-primary/30 transition-all duration-300"
                                >
                                    <skill.icon className={`h-7 w-7 mb-3 ${skill.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:scale-110 transition-transform`} />
                                    <h3 className="font-medium text-sm text-foreground">{skill.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Stack Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="glass-card rounded-lg p-6"
                    >
                        <div className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 pb-3 border-b border-border">
                            Technical Stack
                        </div>
                        <div className="space-y-5">
                            {stackGroups.map((group) => (
                                <div key={group.name}>
                                    <p className="font-mono text-xs text-primary/70 tracking-widest mb-2">{group.name}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.pills.map((pill) => (
                                            <span
                                                key={pill.label}
                                                className={`font-mono text-xs px-2.5 py-1 border rounded-sm transition-all ${pill.active
                                                    ? "border-primary/50 text-primary bg-primary/5"
                                                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                                                    }`}
                                            >
                                                {pill.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
