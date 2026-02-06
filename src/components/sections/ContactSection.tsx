import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-card/30 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="font-display text-5xl md:text-7xl mb-6">
                        Let's Work <span className="text-gradient-primary">Together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                        Open to full-time roles, freelance projects, and collaboration opportunities. If you're building something great and need a developer who delivers, let's talk.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button
                            size="lg"
                            aria-label="Send Email"

                            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group"
                            asChild
                        >
                            <a href="mailto:idrissiradi@gmail.com">
                                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                Send Me an Email
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center gap-4 mt-12"
                    >
                        <a
                            href="mailto:idrissiradi@gmail.com"
                            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/ahmedidradi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/idradi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};