import { useState, memo } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = memo(() => {
    const [ isOpen, setIsOpen ] = useState(false);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Certificates", href: "#certificates" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <Button
                variant="outline"
                size="lg"
                className="fixed top-6 right-6 z-50 rounded-full px-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span className="ml-2">MENU</span>
            </Button>

            {isOpen && (
                <div className="fixed inset-0 bg-background z-40 flex items-center justify-center">
                    <nav className="text-center space-y-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-5xl md:text-7xl font-bold hover:text-muted-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
});

Navigation.displayName = "Navigation";