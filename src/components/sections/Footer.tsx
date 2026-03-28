export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 px-4 border-t border-border/50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs tracking-widest text-foreground/70">
                    © {currentYear} Ahmed Idrissi Radi · idradi.com
                </p>
                <p className="font-mono text-xs tracking-widest text-foreground/70">
                    Built with passion and a lot of coffee ☕.
                </p>
            </div>
        </footer>
    );
};


