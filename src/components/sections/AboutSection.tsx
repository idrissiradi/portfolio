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
                            Hi, I'm Ahmed, a <span className="text-primary font-medium">ML Engineer and Data Engineer</span> based in Marrakech, Morocco. I build end-to-end machine learning systems: data ingestion, feature engineering, model training, experiment tracking with MLflow, and containerized API deployment with FastAPI and Docker.
                        </p>
                        <p>
                            Final-year student in the Licence Professionnelle in AI, Machine Learning & Big Data at ENSA Khouribga. I've built classification pipelines achieving <span className="text-primary font-medium">88.5% accuracy and 92% recall</span> on medical data, engineered features that drove a <span className="text-accent font-medium">77% Kaggle score</span>, and PySpark MLlib pipelines on a real Hadoop/YARN cluster comparing three classifiers at scale.
                        </p>
                        <p className="text-muted-foreground">
                            Seeking a PFE internship in Data Science, ML Engineering, or Data Engineering — May–July 2026. Open to remote and on-site opportunities in Morocco and internationally. If you're building data-driven products, <span className="text-primary font-medium">let's connect.</span>
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