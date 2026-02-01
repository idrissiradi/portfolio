import { projects } from "@/constants/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 md:px-8 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        Featured <span className="text-gradient-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A showcase of my best work, here's what I've built and shipped.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="aspect-video overflow-hidden rounded-2xl border border-border/50">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <span className="flex items-center gap-2 text-sm text-foreground">
                                            <ExternalLink className="h-4 w-4" />
                                            View Project
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};