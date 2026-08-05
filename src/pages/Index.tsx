import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Accordion, AccordionItem } from '@/components/accordion';
import { AboutContent } from '@/components/sections/about-content';
import { CareerContent } from '@/components/sections/career-content';
import { ProjectsContent } from '@/components/sections/projects-content';
import { SkillsContent } from '@/components/sections/skills-content';
import { EducationContent } from '@/components/sections/education-content';
import { CertificatesContent } from '@/components/sections/certificates-content';
import { Contact, Footer } from '@/components/sections/contact';

export default function Index() {
	return (
		<>
			<Header />
			<main>
				<Hero />

				<div className='mx-auto max-w-[720px] px-6'>
					<Accordion>
						<AccordionItem label='About' defaultOpen>
							<AboutContent />
						</AccordionItem>
						<AccordionItem label='Career'>
							<CareerContent />
						</AccordionItem>
						<AccordionItem label='Projects'>
							<ProjectsContent />
						</AccordionItem>
						<AccordionItem label='Skills'>
							<SkillsContent />
						</AccordionItem>
						<AccordionItem label='Education'>
							<EducationContent />
						</AccordionItem>
						<AccordionItem label='Certificates'>
							<CertificatesContent />
						</AccordionItem>
					</Accordion>
				</div>

				<Contact />
			</main>
			<Footer />
		</>
	);
}
