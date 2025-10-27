import { memo } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SkillCardProps {
    tech: string;
    icon: LucideIcon;
}

export const SkillCard = memo(({ tech, icon: Icon }: SkillCardProps) => {
    return (
        <Card className="p-6 flex flex-col items-center justify-center border-border20 hover:border-foreground transition-all group hover-scale">
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Icon className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-sm font-bold text-center">{tech}</p>
        </Card>
    );
});

SkillCard.displayName = "SkillCard";