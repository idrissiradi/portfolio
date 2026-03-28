import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [ position, setPosition ] = useState({ x: 0, y: 0 });
    const [ isHovering, setIsHovering ] = useState(false);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, [role='button'], input, textarea, select, [data-hoverable]")) {
                setIsHovering(true);
            }
        };

        const handleOut = () => setIsHovering(false);
        const handleLeave = () => setIsVisible(false);

        globalThis.window.addEventListener("mousemove", move);
        document.addEventListener("mouseover", handleOver);
        document.addEventListener("mouseout", handleOut);
        document.addEventListener("mouseleave", handleLeave);

        return () => {
            globalThis.window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", handleOver);
            document.removeEventListener("mouseout", handleOut);
            document.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    if (globalThis.window?.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    const dotScale = isHovering ? 0 : isVisible ? 1 : 0;
    const ringScale = isHovering ? 1.5 : isVisible ? 1 : 0;

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
                style={{ width: 8, height: 8 }}
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: dotScale,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-primary/60"
                style={{ width: 40, height: 40 }}
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: ringScale,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
            />
        </>
    );
};

export default CustomCursor;