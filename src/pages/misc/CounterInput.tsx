import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function CounterInput({
    min,
    max,
}: {
    min: number;
    max: number;
}) {
    const [value, setValue] = useState(0);

    const increment = () => {
        if (value >= max) return;
        setValue((prev) => prev + 1);
    };

    const decrement = () => {
        if (value <= min) return;
        setValue((prev) => prev - 1);
    };

    const handleChange = (e: React.ChangeEvent) => {
        const newValue = !e.target.ariaValueNow
            ? 0
            : parseInt(e.target.ariaValueNow, 10);
        setValue(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={decrement}
                className="rounded-l-md bg-gray-100 px-2 py-2 hover:bg-gray-200"
                aria-label="Decrease value"
            >
                <Minus size={16} />
            </button>

            <input
                type="number"
                id="counter"
                value={value}
                onChange={handleChange}
                className="h-8 w-10 border-1 border-gray-300 px-2 text-center focus:outline-none"
                disabled
                style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                }}
            />

            <button
                onClick={increment}
                className="rounded-r-md bg-gray-100 px-2 py-2 hover:bg-gray-200"
                aria-label="Increase value"
            >
                <Plus size={16} />
            </button>
        </div>
    );
}
