import { motion } from "framer-motion";


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 border-t border-border/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}

                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                        <span className="text-sm text-foreground/80">BASED IN MARRAKESH, MOROCCO 🇲🇦</span>
                    </div>
                </motion.div>

                <p>© {currentYear} IDradi. All rights reserved.</p>
                <p>Built with passion and a lot of coffee ☕</p>
            </div>
        </footer>
    );
};