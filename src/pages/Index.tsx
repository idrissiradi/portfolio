import { lazy, Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { Navigation } from '@/components/sections/Navigation';
import CustomCursor from '@/components/CustomCursor';

const Footer = lazy(() =>
	import('@/components/sections/Footer').then((m) => ({ default: m.Footer })),
);
const AboutSection = lazy(() =>
	import('@/components/sections/AboutSection').then((m) => ({
		default: m.AboutSection,
	})),
);
const EducationSection = lazy(() =>
	import('@/components/sections/EducationSection').then((m) => ({
		default: m.EducationSection,
	})),
);
const SkillsSection = lazy(() =>
	import('@/components/sections/SkillsSection').then((m) => ({
		default: m.SkillsSection,
	})),
);
const ExperienceSection = lazy(() =>
	import('@/components/sections/ExperienceSection').then((m) => ({
		default: m.ExperienceSection,
	})),
);
const ProjectsSection = lazy(() =>
	import('@/components/sections/ProjectsSection').then((m) => ({
		default: m.ProjectsSection,
	})),
);
const ContactSection = lazy(() =>
	import('@/components/sections/ContactSection').then((m) => ({
		default: m.ContactSection,
	})),
);
const BackToTop = lazy(() =>
	import('@/components/BackToTop').then((m) => ({ default: m.BackToTop })),
);
const CertificatesSection = lazy(
	() => import('@/components/sections/CertificateSection'),
);

const Divider = () => (
	<hr className='border-t border-border mx-auto max-w-6xl' />
);

const Index = () => {
	return (
		<main className='min-h-screen bg-background cursor-none'>
			<CustomCursor />
			<Navigation />
			<HeroSection />
			<Divider />
			<Suspense fallback={<div className='min-h-[200px]' />}>
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
			</Suspense>
		</main>
	);
};

export default Index;
