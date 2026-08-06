import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
	return (
		<header className='mx-auto flex max-w-[720px] items-center justify-end px-6 py-7'>
			<ThemeToggle />
		</header>
	);
}
