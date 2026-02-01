import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";

import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackToTop } from "@/components/BackToTop";
import { Navigation } from "@/components/sections/Navigation";

const Index = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            {/* <CertificateSection /> */}
            <ContactSection />
            <Footer />
            <BackToTop />
        </main>
    );
};

export default Index;