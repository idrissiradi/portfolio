import { motion } from "framer-motion";
import { ChevronDown, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-150 h-150 rounded-full bg-primary/5 blur-[120px] animate-float" />
                <div className="absolute bottom-1/4 -right-1/4 w-125 h-125 rounded-full bg-accent/5 blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
            </div>

            {/* Availability badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                    <span className="text-sm text-foreground/80">Available for freelance & full-time opportunities</span>
                </div>
            </motion.div>

            {/* Main name */}
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display text-[clamp(3rem,15vw,12rem)] leading-[0.85] tracking-tight"
                >
                    <span className="block">AHMED</span>
                    <span className="block text-gradient-primary">IDRISSI RADI</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6 space-y-4"
                >
                    <h2 className="text-2xl md:text-3xl font-sans font-light text-foreground/90">
                        Full Stack Developer
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        I speak three languages fluently: <span className="text-primary">Python</span>, <span className="text-primary">JavaScript</span>, and <span className="text-accent">possibility</span>.
                    </p>
                    <p className="text-base text-muted-foreground/70">
                        Building solutions that turn "what if" into "watch this".
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-10 flex flex-wrap gap-4 justify-center"
                >
                    <Button
                        aria-label="View My Work"
                        size="lg"
                        className="group bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Briefcase className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        View My Work
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        aria-label="Get In Touch"

                        className="border-foreground/20 hover:bg-foreground/5 hover:border-primary/50"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Get In Touch
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute bottom-8"
            >
                <motion.div
                    animate={{ y: [ 0, 8, 0 ] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-6 w-6 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </section>
    );
};