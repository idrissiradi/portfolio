import { projects } from "@/constants/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SectionTag from "../SectionTag";

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
                <SectionTag label="Work" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-4">
                        ML Projects &<br /><span className="text-gradient-primary">Data Systems</span>
                    </h2>
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
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-sm font-mono text-xs tracking-widest uppercase transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/50 hover:border-primary/30 hover:text-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="grid gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                layout
                                className="group"
                            >
                                {project.featured ? (
                                    /* Featured card with architecture diagram */
                                    <div className="relative glass-card rounded-lg overflow-hidden border-l-[3px] border-l-primary">
                                        <div className="grid lg:grid-cols-2 gap-6 p-6">
                                            <div className="space-y-4">
                                                {/* Status */}
                                                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'wip' ? 'bg-primary shadow-[0_0_6px] shadow-primary' : 'bg-accent shadow-[0_0_6px] shadow-accent'}`} />
                                                    <span className={project.status === 'wip' ? 'text-primary' : 'text-accent'}>
                                                        {project.status === 'wip' ? 'In Progress' : 'Complete'}
                                                    </span>
                                                </div>
                                                <h3 className="font-display text-2xl md:text-3xl text-foreground">{project.title}</h3>
                                                <p className="text-secondary-foreground text-sm leading-relaxed">{project.description}</p>

                                                {/* Model Metrics */}
                                                {project.metrics && (
                                                    <div className="flex gap-4 p-3 bg-primary/5 border border-primary/10 rounded-sm">
                                                        {project.metrics.map((m) => (
                                                            <div key={m.key} className="flex flex-col">
                                                                <span className="font-mono text-base font-bold text-primary">{m.value}</span>
                                                                <span className="font-mono text-[0.62rem] text-foreground/70 tracking-widest uppercase">{m.key}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tech.map((tech) => (
                                                        <span key={tech} className="font-mono text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-foreground/70">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:gap-3 transition-all">
                                                        View on GitHub <ArrowRight className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Architecture Diagram */}
                                            {project.architecture && (
                                                <div className="bg-secondary/30 border border-border rounded-sm p-5 flex flex-col justify-center gap-2">
                                                    {project.architecture.map((node, i) => (
                                                        <div key={i} className="font-mono text-xs text-muted-foreground flex items-center gap-3">
                                                            {'from' in node ? (
                                                                <>
                                                                    <span className={`px-2.5 py-1 border rounded-sm ${node.highlight ? 'border-primary text-primary' : 'border-border'} bg-secondary/50`}>
                                                                        {node.from}
                                                                    </span>
                                                                    <span className="text-muted-foreground">──▶</span>
                                                                    <span className={`px-2.5 py-1 border rounded-sm ${node.highlight ? 'border-primary text-primary' : 'border-border'} bg-secondary/50`}>
                                                                        {node.to}
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                <span className={`px-2.5 py-1 border rounded-sm ${node.accent ? 'border-accent text-accent' : 'border-border'} bg-secondary/50`}>
                                                                    {node.label}
                                                                </span>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    /* Regular project card */
                                    <div className="relative glass-card rounded-lg overflow-hidden border-l-[3px] border-l-transparent hover:border-l-primary transition-all duration-300">
                                        <div className={`grid lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                                            {/* Image */}
                                            <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className={`space-y-4 p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                {/* Status */}
                                                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'wip' ? 'bg-primary shadow-[0_0_6px] shadow-primary' : 'bg-accent shadow-[0_0_6px] shadow-accent'}`} />
                                                    <span className={project.status === 'wip' ? 'text-primary' : 'text-accent'}>
                                                        {project.status === 'wip' ? 'In Progress' : 'Complete'}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-secondary-foreground text-sm leading-relaxed">{project.description}</p>

                                                {/* Model Metrics */}
                                                {project.metrics && (
                                                    <div className="flex gap-4 p-3 bg-primary/5 border border-primary/10 rounded-sm">
                                                        {project.metrics.map((m) => (
                                                            <div key={m.key} className="flex flex-col">
                                                                <span className="font-mono text-base font-bold text-primary">{m.value}</span>
                                                                <span className="font-mono text-[0.62rem] text-muted-foreground tracking-widest uppercase">{m.key}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tech.map((tech) => (
                                                        <span key={tech} className="font-mono text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-foreground/70">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:gap-3 transition-all">
                                                        View on GitHub <ArrowRight className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};