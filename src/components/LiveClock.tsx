import { useState, useEffect } from "react";

export const LiveClock = () => {
    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="font-bold text-sm">
            {time.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })}
        </span>
    );
};