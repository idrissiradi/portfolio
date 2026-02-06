import { projects } from "@/constants/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const categories = [ "All", "Data Science", "Web Development" ];

const categoryMap: Record<string, string> = {
    "All": "all",
    "Data Science": "data-science",
    "Web Development": "web-development",
};

export const ProjectsSection = () => {
    const [ activeCategory, setActiveCategory ] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === categoryMap[ activeCategory ]);
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

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            aria-label="category filter"

                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="grid gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                layout
                                className="group"
                            >
                                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Image */}
                                    <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="aspect-video overflow-hidden rounded-2xl border border-border/50">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Category Badge */}
                                        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                                            {project.category === "data-science" ? "Data Science" : "Web Development"}
                                        </span>
                                        {/* Hover overlay */}
                                        {project.github &&
                                            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-foreground">
                                                    <ExternalLink className="h-4 w-4" />
                                                    View Project
                                                </a>
                                            </div>
                                        }
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
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};