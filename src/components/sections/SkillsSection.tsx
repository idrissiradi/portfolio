import { skillCategories } from "@/constants/portfolio-data";
import { motion } from "framer-motion";


export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        Technical <span className="text-gradient-primary">Skills</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Here are some of the technologies that I work with
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                        >
                            <h3 className="font-display text-xl text-primary mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-foreground border border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};