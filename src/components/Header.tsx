import { useState, useEffect } from "react";
import { LiveClock } from "@/components/LiveClock";

export const Header = () => {
    const [ isVisible, setIsVisible ] = useState(true);
    const [ lastScrollY, setLastScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ lastScrollY ]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 px-6 py-6 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">LOCAL/</span>
                <LiveClock />
            </div>
        </header>
    );
};