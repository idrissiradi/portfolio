import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground dark scroll-smooth">
            <Header />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ProcessSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;