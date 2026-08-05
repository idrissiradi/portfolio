import { useState, type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
	label: string;
	defaultOpen?: boolean;
	children: ReactNode;
}

export function AccordionItem({
	label,
	defaultOpen = false,
	children,
}: AccordionItemProps) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div className='border-b border-border'>
			<button
				type='button'
				aria-expanded={open}
				onClick={() => setOpen((o) => !o)}
				className='flex w-full items-center gap-3 py-5 text-left font-mono text-[13px] font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2'>
				<ChevronRight
					className={cn(
						'h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200',
						open && 'rotate-90 text-accent',
					)}
				/>
				{label}
			</button>

			<div
				className='grid transition-[grid-template-rows] duration-300 ease-out'
				style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
				<div className='overflow-hidden'>
					<div className='pb-7'>{children}</div>
				</div>
			</div>
		</div>
	);
}

export function Accordion({ children }: { children: ReactNode }) {
	return <div className='border-t border-border'>{children}</div>;
}
