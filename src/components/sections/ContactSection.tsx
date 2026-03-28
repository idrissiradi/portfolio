import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants/portfolio-data";
import SectionTag from "../SectionTag";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-card/30 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <SectionTag label="Get in touch" />
                    <h2 className="font-display text-5xl md:text-7xl mb-2">
                        Open to <span className="text-gradient-primary">PFE Internship</span>
                    </h2>
                    <p className="font-display text-3xl md:text-4xl text-muted-foreground mb-6">
                        May – July 2026
                    </p>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto mb-10">
                        Looking for opportunities in Data Science, ML Engineering or Data Engineering. Based in Marrakech — open to remote and relocation.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group font-mono text-xs tracking-widest uppercase"
                            asChild
                        >
                            <a href={`mailto:${socialLinks.email}`} className="flex items-center">
                                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                {socialLinks.email}
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border hover:border-primary/50 hover:text-primary font-mono text-xs tracking-widest uppercase"
                            asChild
                        >
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border hover:border-primary/50 hover:text-primary font-mono text-xs tracking-widest uppercase"
                            asChild
                        >
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};