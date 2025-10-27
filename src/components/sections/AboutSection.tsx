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
        <section id="about" className="w-full py-32 bg-accent/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-12">About Me</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Hi, I'm Ahmed, a passionate Full Stack Developer with nearly 3 years of experience building modern web applications, RESTful APIs, and scalable backend systems.
                    </p>
                    <p>
                        I specialize in Python (Django, FastAPI), Node.js (Express, NestJS, React), and PHP (Laravel), combining solid backend logic with clean and intuitive front-end interfaces.
                    </p>
                    <p>
                        Currently pursuing a Bachelor's in AI, Machine Learning & Big Data to expand my expertise in intelligent, data-driven solutions.
                    </p>
                    <p>
                        In my portfolio, you will find a showcase of my work, highlighting the projects I have contributed to and the technologies I have mastered. I invite you to explore and witness firsthand the dedication and creativity that I bring to every endeavor.
                    </p>
                    <p>
                        I'm open to opportunities where I can contribute, learn, and grow. If you're looking for a developer who delivers results and thrives in collaborative environments, then don't hesitate to contact me.
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