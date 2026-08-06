import { Sparkles } from 'lucide-react';
import { education } from '@/constants/portfolio-data';

export function EducationContent() {
	return (
		<div>
			{education.map((edu, i) => (
				<div
					key={edu.school}
					className={`py-3.5 ${i > 0 ? 'border-t border-border' : 'pt-1'}`}>
					<div className='flex flex-wrap items-baseline justify-between gap-3'>
						<div className='text-base font-semibold'>
							{edu.degree}
						</div>
						{edu.current && (
							<span className='inline-flex items-center gap-1 font-mono text-xs text-[oklch(0.72_0.12_75)]'>
								<Sparkles className='h-3 w-3 fill-current' />{' '}
								Current
							</span>
						)}
					</div>
					<div className='mt-1 font-mono text-[13px] text-muted-foreground'>
						{edu.school} · {edu.period}
					</div>
					{edu.tags && edu.tags.length > 0 && (
						<div className='mt-2.5 flex flex-wrap gap-1.5'>
							{edu.tags.map((tag) => (
								<span
									key={tag}
									className='border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground'>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
