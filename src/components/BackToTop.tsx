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
            aria-label="Open menu"
            size="icon"
            className={`fixed bottom-6 right-6 z-50 rounded-full transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}
        >
            <ArrowUp className="w-5 h-5" />
        </Button>
    );
};