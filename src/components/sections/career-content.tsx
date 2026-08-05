import { experience } from '@/lib/data';

export function CareerContent() {
	return (
		<div>
			{experience.map((job, i) => (
				<div
					key={`${job.company}-${job.period}`}
					className={`grid grid-cols-1 gap-2 py-4 sm:grid-cols-[96px_1fr] sm:gap-5 ${
						i > 0 ? 'border-t border-border' : 'pt-1'
					}`}>
					<div className='font-mono text-xs text-muted-foreground sm:pt-0.5'>
						{job.period}
					</div>

					<div>
						<div className='text-[15px] font-semibold'>
							{job.role}
						</div>
						<div className='mt-0.5 font-mono text-[13px] text-primary'>
							{job.company}
						</div>
						<p className='mt-2 max-w-[540px] text-sm leading-relaxed text-foreground/80'>
							{job.bullets.join(' ')}
						</p>
						<div className='mt-2.5 flex flex-wrap gap-x-1.5 gap-y-1'>
							{job.stack.map((tech, ti) => (
								<span
									key={tech}
									className='font-mono text-[11px] text-muted-foreground'>
									{tech}
									{ti < job.stack.length - 1 && (
										<span className='text-border'> · </span>
									)}
								</span>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
