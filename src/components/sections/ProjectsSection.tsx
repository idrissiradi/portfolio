import { projects } from '@/constants/portfolio-data';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import SectionTag from '../SectionTag';

export const ProjectsSection = () => {
	return (
		<section id='projects' className='py-24 px-4 md:px-8 bg-card/30'>
			<div className='max-w-6xl mx-auto'>
				<SectionTag label='Work' />
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8 }}
					className='mb-16'>
					<h2 className='font-display text-5xl md:text-7xl mb-4 md:text-left'>
						ML Projects &<br />
						<span className='text-gradient-primary'>
							Data Systems
						</span>
					</h2>
				</motion.div>

				{/* Category Filter */}

				<div className='grid gap-6'>
					<AnimatePresence mode='popLayout'>
						{projects.map((project, index) => (
							<motion.article
								key={project.title}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								layout
								className='group'>
								{project.featured ? (
									/* ── FEATURED CARD ── */
									<div className='glass-card glow-hover group overflow-hidden rounded-2xl border-primary/30'>
										<div className='grid lg:grid-cols-5'>
											<div className='min-w-0 p-5 sm:p-6 lg:col-span-3 lg:p-7'>
												<div className='mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.15em]'>
													<div className='flex items-center gap-2'>
														<span className='text-muted-foreground'>
															No.{' '}
															{String(
																index + 1,
															).padStart(2, '0')}
														</span>
														<span className='text-muted-foreground/60'>
															·
														</span>
														<span
															className={
																project.category ===
																'data-science'
																	? 'text-primary'
																	: 'text-accent'
															}>
															{project.category ===
															'data-science'
																? 'ML / Data Science'
																: 'Web Development'}
														</span>
														<span className='text-accent'>
															★ Featured
														</span>
													</div>
													<span
														className={
															project.status ===
															'completed'
																? 'inline-flex items-center gap-1.5 text-accent'
																: 'inline-flex items-center gap-1.5 text-primary'
														}>
														<Circle
															className='h-2 w-2 fill-current'
															strokeWidth={0}
														/>
														{project.status ===
														'completed'
															? 'Complete'
															: 'Live'}
													</span>
												</div>

												<h3 className='mb-2 text-xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl font-display'>
													{project.title}
												</h3>
												<p className='mb-5 text-[13.5px] leading-relaxed text-secondary-foreground'>
													{project.description}
												</p>

												<div className='mb-4 flex flex-wrap gap-1.5'>
													{project.tech.map(
														(tech) => (
															<span
																key={tech}
																className='font-mono text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-foreground/70'>
																{tech}
															</span>
														),
													)}
												</div>

												{project.link && (
													<a
														href={project.link}
														target='_blank'
														rel='noopener noreferrer'
														aria-label={`View ${project.title} on GitHub`}
														className='inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-accent'>
														View on GitHub{' '}
														<ArrowRight className='h-3.5 w-3.5' />
													</a>
												)}
											</div>

											{project.metrics &&
												project.metrics.length > 0 && (
													<div className='flex flex-col justify-center border-t border-border bg-secondary/30 p-5 sm:p-6 lg:col-span-2 lg:border-t-0 lg:border-l lg:p-7'>
														<div className='mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
															Key Metrics
														</div>
														<div className='grid grid-cols-2 gap-4 lg:grid-cols-1'>
															{project.metrics.map(
																(metric) => (
																	<div
																		key={
																			metric.key
																		}
																		className='border-l-2 border-primary/40 pl-3'>
																		<div className='font-mono text-lg font-bold leading-none tracking-tight text-foreground sm:text-xl'>
																			{
																				metric.value
																			}
																		</div>
																		<div className='mt-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.15em] text-muted-foreground'>
																			{
																				metric.key
																			}
																		</div>
																	</div>
																),
															)}
														</div>
													</div>
												)}
										</div>
									</div>
								) : (
									/* ── REGULAR CARD ── */
									<div className='relative glass-card rounded-lg overflow-hidden border-l-[3px] border-l-transparent hover:border-l-primary transition-all duration-300 w-full min-w-0'>
										<div className='grid lg:grid-cols-2 gap-0 lg:gap-6 items-center'>
											<div
												className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
												<div className='aspect-video overflow-hidden'>
													<img
														src={project.image}
														alt={project.title}
														className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
													/>
												</div>
											</div>

											<div
												className={`space-y-4 p-4 md:p-6 min-w-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
												<div className='flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase'>
													<span
														className={`w-1.5 h-1.5 rounded-full shrink-0 ${
															project.status ===
															'completed'
																? 'bg-accent shadow-[0_0_6px] shadow-accent'
																: 'bg-primary shadow-[0_0_6px] shadow-primary'
														}`}
													/>
													<span
														className={
															project.status ===
															'completed'
																? 'text-accent'
																: 'text-primary'
														}>
														{project.status ===
														'completed'
															? 'Complete'
															: 'Live'}
													</span>
												</div>

												<h3 className='font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors break-words'>
													{project.title}
												</h3>
												<p className='text-secondary-foreground text-sm leading-relaxed break-words'>
													{project.description}
												</p>

												{project.metrics && (
													<div className='flex flex-wrap gap-3 p-3 bg-primary/5 border border-primary/10 rounded-sm'>
														{project.metrics.map(
															(m) => (
																<div
																	key={m.key}
																	className='flex flex-col'>
																	<span className='font-mono text-base font-bold text-primary'>
																		{
																			m.value
																		}
																	</span>
																	<span className='font-mono text-[0.62rem] text-muted-foreground tracking-widest uppercase'>
																		{m.key}
																	</span>
																</div>
															),
														)}
													</div>
												)}

												<div className='flex flex-wrap gap-1.5'>
													{project.tech.map(
														(tech) => (
															<span
																key={tech}
																className='font-mono text-xs px-2 py-0.5 bg-background border border-border rounded-sm text-foreground/70'>
																{tech}
															</span>
														),
													)}
												</div>

												{project.link && (
													<a
														href={project.link}
														target='_blank'
														rel='noopener noreferrer'
														className='inline-flex items-center gap-2 font-mono text-xs text-primary hover:gap-3 transition-all'>
														View on GitHub{' '}
														<ArrowRight className='h-3 w-3' />
													</a>
												)}
											</div>
										</div>
									</div>
								)}
							</motion.article>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
