import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

export const ProjectCard = memo(({ title, description, tags, image }: ProjectCardProps) => {
    return (
        <Card className="group overflow-hidden bg-muted-foreground/8 border-border hover:border-foreground hover:bg-muted-foreground/12 transition-all duration-300 hover-scale">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={`/img/${image}`}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

            </div>
        </Card>
    );
});

ProjectCard.displayName = "ProjectCard";