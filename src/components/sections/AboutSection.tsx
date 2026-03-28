import { stackGroups } from "@/constants/portfolio-data";
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
                            I'm an ML Engineering student and developer based in Marrakech, Morocco. With a background in full-stack development and a current focus on <span className="text-foreground font-semibold">machine learning pipelines, distributed data processing, and production model deployment.</span>
                        </p>
                        <p>
                            I don't just train models in notebooks. I build the full stack around them: feature engineering pipelines, experiment tracking with MLflow, REST API serving with FastAPI, and containerized deployment with Docker.
                        </p>
                        <p className="text-muted-foreground">
                            I'm a final-year student in the Licence Professionnelle in AI, Machine Learning & Big Data at ENSA Khouribga, targeting a <span className="text-primary font-medium">PFE internship in May–July 2026</span> in Data Science, ML Engineering, or Data Engineering.
                        </p>
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