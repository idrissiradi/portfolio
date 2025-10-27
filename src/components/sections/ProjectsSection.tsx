import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/constants/portfolio-data";

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-32 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground text-xl mb-16">
                    A showcase of my best work, here's what I've built and shipped.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};