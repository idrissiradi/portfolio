import { skills } from "@/constants/portfolio-data";
import { motion } from "framer-motion";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-12">
                        About <span className="text-gradient-primary">Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-lg text-secondary-foreground leading-relaxed"
                    >
                        <p>
                            Hi, I'm Ahmed, a <span className="text-primary font-medium">Full Stack Developer</span> with 2+ years of combined experience. I build web applications and REST APIs and machine learning solutions. My tech stack includes Python (Django, FastAPI), JavaScript (React, Node.js), and PHP (Laravel), with a growing focus on data science and ML.
                        </p>
                        <p>
                            Currently pursuing my Bachelor's degree in <span className="text-accent font-medium">AI Engineering, Machine Learning & Big Data</span> at ENSA Khouribga. I'm combining my software development background with machine learning to build intelligent, data-focused solutions. I've already built predictive models for heart disease classification and Titanic survival prediction using scikit-learn and Python.
                        </p>
                        <p className="text-muted-foreground">
                            I'm actively seeking opportunities in Marrakech or remote positions where I can contribute as a full-stack developer while continuing to grow my data science skills. Let's build something great together.
                        </p>
                    </motion.div>

                    {/* Skills grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                            >
                                <skill.icon className={`h-8 w-8 mb-4 ${skill.color === 'primary' ? 'text-primary' : 'text-accent'} group-hover:scale-110 transition-transform`} />
                                <h3 className="font-medium text-foreground">{skill.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};