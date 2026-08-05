import Index from './pages/Index';
import { ThemeProvider } from '@/components/theme-provider';

const App = () => (
	<ThemeProvider>
		<Index />
	</ThemeProvider>
);

export default App;
