import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
            <div className="mb-8 animate-fade-in">
                <Badge
                    variant="outline"
                    className="text-sm px-4 py-2 rounded-full border-white/25 inline-flex items-center gap-2 hover:bg-accent transition-colors"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                        <div className="relative w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    </div>
                    <span>Available for freelance & full-time opportunities</span>
                </Badge>
            </div>

            <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none text-center mb-8 animate-fade-in">
                <div>AHMED</div>
                <div>IDRISSI RADI</div>
            </h1>

            <div className="text-center space-y-4 max-w-2xl animate-fade-in">
                <p className="text-2xl md:text-3xl font-bold">Full Stack Developer</p>
                <p className="text-muted-foreground text-lg">
                    I speak three languages fluently: Python, JavaScript, and possibility.
                </p>
                <p className="text-muted-foreground text-lg">
                    Building solutions that turn "what if" into "watch this".
                </p>
            </div>

            <div className="flex gap-4 mt-12 animate-fade-in">
                <Button
                    size="lg"
                    className="rounded-full hover-scale"
                    onClick={() => scrollToSection("projects")}
                >
                    View My Work
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full hover-scale"
                    onClick={() => scrollToSection("contact")}
                >
                    Get In Touch
                </Button>
            </div>

            <button
                onClick={() => scrollToSection("about")}
                className=" absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce cursor-pointer bg-transparent border-border w-12 h-12 rounded-full hover:bg-muted/30 transition
  "
                aria-label="Scroll to about section"
            >
                <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </button>
        </section>
    );
};