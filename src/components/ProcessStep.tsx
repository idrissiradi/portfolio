import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

interface ProcessStepProps {
    title: string;
    companyName: string;
    period: string;
    description: string;
    technologies: string[];
    alignment: "left" | "right";
}

export const ProcessStep = memo(
    ({

        title,
        companyName,
        period,
        description,
        technologies,
        alignment,
    }: ProcessStepProps) => {
        const content = (
            <Card className="shadow-sm border-border hover:shadow-md transition-shadow bg-muted-foreground/6 hover:bg-muted-foreground/10">
                <CardContent className="p-6">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-1">{title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <p className="text-base font-medium text-primary">{companyName}</p>
                        <Separator orientation="vertical" className="h-4" />
                        <p className="text-sm text-muted-foreground">{period}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="rounded-full px-3 py-1 text-sm"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );

        const circle = (
            <div className="w-16 h-16 rounded-full  border border-border20 flex items-center justify-center bg-muted-foreground/20" >
                <Briefcase className="w-6 h-6 text-foreground" />
            </div>
        );

        if (alignment === "right") {
            return (
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                    <div className="md:hidden shrink-0">{circle}</div>
                    <div className="md:text-left md:order-first">{content}</div>
                    <div className="hidden md:block shrink-0">{circle}</div>
                </div>
            );
        }

        return (
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="shrink-0">{circle}</div>
                {content}
            </div>
        );
    }
);

ProcessStep.displayName = "ProcessStep";
