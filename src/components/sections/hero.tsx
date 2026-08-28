import { socialLinks } from '@/constants/portfolio-data';

export function Hero() {
	return (
		<section className='mx-auto max-w-[720px] px-6 pb-12 pt-6'>
			<div className='mb-4 font-mono text-[13px] text-accent'>
				Data Science &amp; ML Developer
			</div>

			<h1 className='font-display text-[clamp(38px,6vw,56px)] font-normal leading-[1.1] tracking-wide'>
				Ahmed Idrissi Radi
			</h1>

			<p className='mt-5 max-w-[560px] font-sans text-[17px] leading-relaxed text-foreground/85'>
				Based in Marrakech, Morocco. I build ML systems designed to
				leave the notebook. data pipelines, model training, and
				containerized APIs that hold up outside a notebook. With a
				background in full-stack development, now focused on machine
				learning, deep learning, NLP, and computer vision.
			</p>

			<div className='mt-6 flex flex-wrap gap-5 font-mono text-[13px]'>
				<a
					href={`mailto:${socialLinks.email}`}
					className='text-primary underline-offset-4 hover:underline'
					target='_blank'>
					Email
				</a>
				<a
					href={socialLinks.github}
					className='text-primary underline-offset-4 hover:underline'
					target='_blank'>
					GitHub
				</a>
				<a
					href={socialLinks.linkedin}
					className='text-primary underline-offset-4 hover:underline'
					target='_blank'>
					LinkedIn
				</a>
				<a
					href={socialLinks.x}
					className='text-primary underline-offset-4 hover:underline'
					target='_blank'>
					X
				</a>
			</div>
		</section>
	);
}
