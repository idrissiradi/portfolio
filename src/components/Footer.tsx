import { Badge } from "./ui/badge";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-border">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="animate-fade-in">
                    <Badge
                        variant="outline"
                        className="text-sm px-4 py-2 rounded-full border-white/25 inline-flex items-center gap-2 hover:bg-accent transition-colors"
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" />
                            <div className="relative w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            BASED IN MOROCCO
                        </p>
                    </Badge>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Idradi. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                    FRONTEND DEVELOPER + BACKEND SPECIALIST
                </p>
            </div>
        </footer>
    );
};