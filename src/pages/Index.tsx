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
import CertificatesSection from "@/components/sections/CertificateSection";
import CustomCursor from "@/components/CustomCursor";

const Divider = () => <hr className="border-t border-border mx-auto max-w-6xl" />;


const Index = () => {
    return (
        <main className="min-h-screen bg-background cursor-none">
            <CustomCursor />
            <Navigation />
            <HeroSection />
            <Divider />
            <AboutSection />
            <Divider />
            <ProjectsSection />
            <Divider />
            <SkillsSection />
            <Divider />
            <ExperienceSection />
            <Divider />
            <EducationSection />
            <Divider />
            <CertificatesSection />
            <Divider />
            <ContactSection />
            <Footer />
            <BackToTop />
        </main>
    );
};

export default Index;