import { ProcessStep } from "@/components/ProcessStep";
import { processSteps } from "@/constants/portfolio-data";

export const ProcessSection = () => {
    return (
        <section id="experience" className="w-full py-32 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Experience</h2>
                <p className="text-muted-foreground text-xl mb-20 max-w-3xl">
                    Projects and roles that shaped my development career
                </p>

                <div className="space-y-32">
                    {processSteps.map((step) => (
                        <ProcessStep key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};