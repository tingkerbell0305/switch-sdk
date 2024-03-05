import { jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const Timer = () => {
    const [timer, setTimer] = useState(0);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const secondsWithLeadingZero = seconds.toString().padStart(2, "0");
    const displayMinutes = minutes ? `${minutes}m` : "";
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (_jsxs("div", { children: [displayMinutes, secondsWithLeadingZero, "s"] }));
};
//# sourceMappingURL=Timer.js.map