import { Linkedin, Mail } from "lucide-react";
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants/portfolio-data";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-32 px-4 bg-accent/20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's Work Together</h2>
                <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
                    Open to full-time roles, freelance projects, and collaboration opportunities. If you're building something great and need a developer who delivers, let's talk.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <Button
                        size="lg"
                        className="rounded-full gap-2 hover-scale"
                        asChild
                    >
                        <a href={`mailto:${socialLinks.email}`}>
                            <Mail className="w-5 h-5" />
                            Send Me an Email
                        </a>
                    </Button>
                </div>

                <div className="flex gap-4 justify-center">
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full w-12 h-12 hover-scale"
                        asChild
                    >
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <SiGithub className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full w-12 h-12 hover-scale"
                        asChild
                    >
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full w-12 h-12 hover-scale"
                        asChild
                    >
                        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                            <SiX className="w-5 h-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};