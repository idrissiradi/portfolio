import { Badge } from "../ui/badge";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 border-t border-border/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <Badge
                    variant="outline"
                    className="text-sm px-4 py-2 rounded-full border-white/25 inline-flex items-center gap-2 hover:bg-accent transition-colors"
                >
                    <span className="relative flex items-center justify-center">
                        <span className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" />
                        <span className="relative w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    </span>
                    <span className="text-sm text-muted-foreground">
                        BASED IN MARRAKESH, MOROCCO 🇲🇦
                    </span>
                </Badge>

                <p>© {currentYear} IDradi. All rights reserved.</p>
                <p>Built with passion and a lot of coffee ☕</p>
            </div>
        </footer>
    );
};