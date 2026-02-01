import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/constants/portfolio-data";

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        <span className="text-gradient-primary">Education</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        My academic background and ongoing learning journey
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all"
                        >
                            <div className="flex gap-4">
                                <div className={`p-3 rounded-xl ${edu.current ? 'bg-primary/20' : 'bg-secondary'} h-fit`}>
                                    <GraduationCap className={`h-6 w-6 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                                </div>
                                <div className="flex-1">
                                    {edu.current && (
                                        <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary mb-2">
                                            Current
                                        </span>
                                    )}
                                    <h3 className="font-display text-xl text-foreground">{edu.degree}</h3>
                                    <p className="text-primary font-medium text-sm mt-1">{edu.school}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                                    <p className="text-secondary-foreground mt-3 text-sm">{edu.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};