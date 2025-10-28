import { Code2, Database, Terminal, SquareTerminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
    { icon: Code2, label: "Clean Code & Best Practices" },
    { icon: Database, label: "Database Design & SQL Modeling" },
    { icon: Terminal, label: "REST API Development" },
    { icon: SquareTerminal, label: "Full-Stack Architecture" },
];

export const AboutSection = () => {
    return (
        <section id="about" className="w-full py-32 px-4 bg-accent/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-12">About Me</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Hi, I'm Ahmed, a Full Stack Developer with 3 years of experience. I build web applications, APIs, and backend systems using Python (Django, FastAPI), Node.js (Express, NestJS, React), and PHP (Laravel).
                    </p>
                    <p>
                        I specialize in Python (Django, FastAPI), Node.js (Express, NestJS, React), and PHP (Laravel), combining solid backend logic with clean and intuitive front-end interfaces.
                    </p>
                    <p>
                        Right now, I'm getting my Bachelor's degree in AI, Machine Learning & Big Data. This helps me build smarter, data-focused solutions.
                    </p>
                    <p>
                        In my portfolio, you will find a showcase of my work, highlighting the projects I have contributed to and the technologies I have mastered. Take a look and see what I can do.
                    </p>
                    <p>
                        I'm open to opportunities where I can contribute, learn, and grow.  If you need a reliable developer who works well with teams, then don't hesitate to contact me.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {highlights.map((item) => (
                        <Card
                            key={item.label}
                            className="p-6 text-center border-border20 hover:bg-accent hover:border-foreground transition-all hover-scale"
                        >
                            <item.icon className="w-10 h-10 mx-auto mb-3 text-foreground" />
                            <p className="text-sm font-medium">{item.label}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};