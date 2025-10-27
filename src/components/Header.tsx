import { LiveClock } from "@/components/LiveClock";
import { Navigation } from "@/components/Navigation";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">LOCAL/</span>
                <LiveClock />
            </div>
            <Navigation />
        </header>
    );
};