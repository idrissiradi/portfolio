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

interface ArchNode {
    label?: string;
    sublabel?: string;
    accent?: boolean;
    from?: string;
    to?: string;
    highlight?: boolean;
}

const ArchDiagram = ({ nodes }: { nodes: ArchNode[] }) => {
    // Flatten all nodes into a single list of chips
    const chips = nodes.flatMap((node) => {
        if ('from' in node && node.from && node.to) {
            return [
                { label: node.from, sublabel: undefined },
                { label: node.to, sublabel: undefined },
            ];
        }
        return [ { label: node.label ?? '', sublabel: node.sublabel } ];
    });

    // Deduplicate consecutive identical labels
    const deduped = chips.filter((chip, i) =>
        i === 0 || chip.label !== chips[ i - 1 ].label
    );

    const chipClass = (i: number) =>
        i === deduped.length - 1
            ? 'border-accent/60 bg-accent/5'
            : 'border-primary/40 bg-primary/5';

    const textClass = (i: number) =>
        i === deduped.length - 1 ? 'text-accent' : 'text-primary';

    return (
        <div className="bg-secondary/30 border border-border rounded-sm p-4 min-w-0 flex flex-col justify-center">
            {/* D-style: scrollable strip on mobile */}
            <div className="flex gap-2 overflow-x-scroll pb-1 md:hidden">
                {deduped.map((chip, i) => (
                    <div key={i} className="flex items-center gap-2 shrink-0">
                        <div className={`border rounded-md px-3 py-2 min-w-20 text-center ${chipClass(i)}`}>
                            {chip.sublabel && (
                                <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-0.5">
                                    {chip.sublabel}
                                </div>
                            )}
                            <div className={`font-mono text-[11px] font-semibold leading-tight ${textClass(i)}`}>
                                {chip.label}
                            </div>
                        </div>
                        {i < deduped.length - 1 && (
                            <span className="text-muted-foreground text-sm shrink-0">›</span>
                        )}
                    </div>
                ))}
            </div>

            {/* C-style: 2-col grid on md+ */}
            <div className="hidden md:grid grid-cols-2 gap-2">
                {deduped.map((chip, i) => (
                    <div
                        key={i}
                        className={`border rounded-md px-3 py-2 text-center ${chipClass(i)}`}
                    >
                        {chip.sublabel && (
                            <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-0.5">
                                {chip.sublabel}
                            </div>
                        )}
                        <div className={`font-mono text-xs font-semibold leading-tight ${textClass(i)}`}>
                            {chip.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
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
                    <h2 className="font-display text-5xl md:text-7xl mb-4 text-center md:text-left">
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
                                    /* ── FEATURED CARD ── */
                                    <div className="relative glass-card rounded-lg overflow-hidden border-l-[3px] border-l-primary w-full min-w-0">
                                        <div className="grid lg:grid-cols-2 gap-6 p-4 md:p-6">

                                            {/* Left: text */}
                                            <div className="space-y-4 min-w-0">
                                                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase">
                                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${project.status === 'completed'
                                                        ? 'bg-accent shadow-[0_0_6px] shadow-accent'
                                                        : 'bg-primary shadow-[0_0_6px] shadow-primary'}`} />
                                                    <span className={project.status === 'completed' ? 'text-accent' : 'text-primary'}>
                                                        {project.status === 'completed' ? 'Complete' : 'Live'}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-2xl md:text-3xl text-foreground wrap_wrap_break-words">
                                                    {project.title}
                                                </h3>

                                                <p className="text-secondary-foreground text-sm leading-relaxed wrap_wrap_break-words">
                                                    {project.description}
                                                </p>

                                                {project.metrics && (
                                                    <div className="flex flex-wrap gap-3 p-3 bg-primary/5 border border-primary/10 rounded-sm">
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
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:gap-3 transition-all">
                                                        View on GitHub <ArrowRight className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Right: architecture diagram */}
                                            {project.architecture && (
                                                <ArchDiagram nodes={project.architecture} />
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    /* ── REGULAR CARD ── */
                                    <div className="relative glass-card rounded-lg overflow-hidden border-l-[3px] border-l-transparent hover:border-l-primary transition-all duration-300 w-full min-w-0">
                                        <div className="grid lg:grid-cols-2 gap-0 lg:gap-6 items-center">
                                            <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`space-y-4 p-4 md:p-6 min-w-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase">
                                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${project.status === 'completed'
                                                        ? 'bg-accent shadow-[0_0_6px] shadow-accent'
                                                        : 'bg-primary shadow-[0_0_6px] shadow-primary'}`} />
                                                    <span className={project.status === 'completed' ? 'text-accent' : 'text-primary'}>
                                                        {project.status === 'completed' ? 'Complete' : 'Live'}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors wrap_wrap_wrap_break-words">
                                                    {project.title}
                                                </h3>
                                                <p className="text-secondary-foreground text-sm leading-relaxed wrap_wrap_break-words">
                                                    {project.description}
                                                </p>

                                                {project.metrics && (
                                                    <div className="flex flex-wrap gap-3 p-3 bg-primary/5 border border-primary/10 rounded-sm">
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
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 font-mono text-xs text-primary hover:gap-3 transition-all">
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