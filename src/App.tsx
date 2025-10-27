import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";


const App = () => (
  <div>
    <TooltipProvider>
      <Toaster />
      <Index />
    </TooltipProvider>
  </div>
);

export default App;