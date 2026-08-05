import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
	return (
		<header className='mx-auto flex max-w-180 items-end justify-end px-6 py-7'>
			<ThemeToggle />
		</header>
	);
}
