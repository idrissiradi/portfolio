import { Card } from "@/components/ui/card";
import { education } from "@/constants/portfolio-data";

export const EducationSection = () => {
    return (
        <section id="education" className="w-full py-32 px-4 bg-accent/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Education</h2>
                <p className="text-muted-foreground text-xl mb-20 max-w-3xl">
                    My academic background and ongoing learning journey
                </p>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <Card key={index} className="p-8 border-border hover:bg-accent/50 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                                <span className="text-muted-foreground">{edu.period}</span>
                            </div>
                            <p className="text-lg font-medium text-muted-foreground mb-2">{edu.institution}</p>
                            <p className="text-muted-foreground">{edu.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};