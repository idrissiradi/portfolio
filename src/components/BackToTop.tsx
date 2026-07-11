import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackToTop = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Button
            onClick={scrollToTop}
            aria-label="Back to top"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
            size="icon"
            className={`fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
                }`}
        >
            <ArrowUp className="w-5 h-5" />
        </Button>
    );
};
