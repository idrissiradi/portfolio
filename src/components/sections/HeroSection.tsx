import { motion } from 'framer-motion';
import { ChevronDown, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
	return (
		<section className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4'>
			{/* Background gradient orbs */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-1/4 -left-1/4 w-150 h-150 rounded-full bg-primary/5 blur-[120px] animate-float' />
				<div
					className='absolute bottom-1/4 -right-1/4 w-125 h-125 rounded-full bg-accent/5 blur-[100px] animate-float'
					style={{ animationDelay: '-3s' }}
				/>
			</div>

			{/* Availability badge */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='mb-6 sm:mb-8 max-w-full'>
				<div className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm max-w-full'>
					<span className='w-2 h-2 shrink-0 rounded-full bg-primary animate-glow-pulse' />

					<span className='text-[11px] sm:text-sm text-foreground/90 font-mono whitespace-normal text-center leading-snug'>
						Open to Work · On-site · Remote · Hybrid · Relocation
					</span>
				</div>
			</motion.div>

			{/* Hero label */}
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
				className='font-mono text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase text-primary mb-6 text-center leading-relaxed px-2'>
				<span className='text-muted-foreground'>&gt; </span>Data Science
				& ML Developer · @Marrakech, Morocco.
				<br />
			</motion.p>

			{/* Main name */}
			<div className='text-center w-full'>
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='font-display text-[clamp(2.5rem,13vw,12rem)] leading-[0.9] sm:leading-[0.85] tracking-tight break-words'>
					<span className='block'>AHMED</span>
					<span className='block text-gradient-primary'>
						IDRISSI RADI
					</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className='mt-6 space-y-3 sm:space-y-4 px-2'>
					<p className='font-sans text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto'>
						From <span className='text-accent'>messy data </span> to{' '}
						<span className='text-primary'>trained models. </span>
					</p>
					<p className='font-sans text-base sm:text-xl text-muted-foreground/70'>
						From <span className='text-primary'>notebooks </span> to{' '}
						<span className='text-accent'>production APIs.</span>
					</p>
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
					className='mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4'>
					<Button
						size='lg'
						className='group bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-mono text-xs tracking-widest uppercase w-full sm:w-auto'
						onClick={() =>
							document
								.getElementById('projects')
								?.scrollIntoView({ behavior: 'smooth' })
						}>
						<Briefcase className='mr-2 h-4 w-4 group-hover:scale-110 transition-transform' />
						View Projects
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='border-border hover:border-primary/50 hover:text-chart-3 font-mono text-xs tracking-widest uppercase w-full sm:w-auto'
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}>
						<Mail className='mr-2 h-4 w-4' />
						Contact Me
					</Button>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 1.4 }}
				className='absolute bottom-8'>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}>
					<span className='absolute bottom-6 left-1/2 -translate-x-1/2 mono text-[10px] tracking-[0.2em] uppercase  flex flex-col items-center gap-2 reveal text-foreground/50'>
						Scroll
					</span>
					<ChevronDown className='h-6 w-6 text-muted-foreground' />
				</motion.div>
			</motion.div>
		</section>
	);
};
