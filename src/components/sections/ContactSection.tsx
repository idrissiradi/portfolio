import { motion } from 'framer-motion';
import { FileDown, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { socialLinks } from '@/constants/portfolio-data';

export const ContactSection = () => {
	return (
		<section id='contact' className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
			<div className='mx-auto max-w-[1100px]'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8 }}
					className='glass-card relative overflow-hidden rounded-3xl p-6 text-center sm:p-10 lg:p-14'>
					<div className='pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float rounded-full bg-primary/15 blur-3xl' />
					<div className='pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 animate-float rounded-full bg-accent/10 blur-3xl [animation-delay:-3s]' />

					<div className='relative'>
						<p className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary'>
							Contact
						</p>
						<h2 className='mx-auto max-w-[16ch] font-sans text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[44px] lg:text-[56px]'>
							Open to{' '}
							<span className='text-gradient-primary'>Work</span>
						</h2>
						<p className='mx-auto mt-4 max-w-[68ch] text-[15px] leading-relaxed text-secondary-foreground sm:text-base'>
							Looking for opportunities in Data Science or Machine
							Learning. <br />
							open to on-site, remote, hybrid, and relocation. The
							fastest way to reach me is email.
						</p>

						<div className='mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12.5px] text-muted-foreground'>
							<span className='inline-flex items-center gap-1.5'>
								<MapPin className='h-3.5 w-3.5' /> Marrakech,
								Morocco
							</span>
							<span className='text-muted-foreground/60'>·</span>
							<span className='inline-flex items-center gap-1.5'>
								<Mail className='h-3.5 w-3.5' />{' '}
								{socialLinks.email}
							</span>
						</div>

						<div className='mt-8 flex flex-wrap items-center justify-center gap-2.5'>
							<a
								href={`mailto:${socialLinks.email}`}
								className='group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-mono text-[13px] font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_32px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all hover:bg-primary/90'>
								<Send className='h-4 w-4 transition-transform group-hover:translate-x-1' />{' '}
								{socialLinks.email}
							</a>
							<a
								href={socialLinks.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex h-12 items-center gap-2 rounded-full border border-border px-5 font-mono text-[13px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary'>
								<Linkedin className='h-4 w-4' /> LinkedIn
							</a>
							<a
								href={socialLinks.github}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex h-12 items-center gap-2 rounded-full border border-border px-5 font-mono text-[13px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary'>
								<Github className='h-4 w-4' /> GitHub
							</a>
							<a
								href={socialLinks.cv}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex h-12 items-center gap-2 rounded-full border border-accent/50 px-5 font-mono text-[13px] font-semibold uppercase tracking-wider text-accent transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground'>
								<FileDown className='h-4 w-4' /> Download CV
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
