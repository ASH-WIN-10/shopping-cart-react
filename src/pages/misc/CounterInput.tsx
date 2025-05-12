import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Product, useFetchProduct } from "../shop/productsAPI";

export default function CounterInput({
    min,
    max,
    cartItems,
    updateCartItems,
    productId,
    productQuantity = min,
}: {
    min: number;
    max: number;
    cartItems: Product[];
    updateCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    productId: number;
    productQuantity?: number;
}) {
    const [value, setValue] = useState(productQuantity);
    const { product } = useFetchProduct(productId);

    useEffect(() => {
        const item = cartItems.find((item) => item.id === productId);
        if (item) {
            setValue(item.quantity || min);
        } else {
            setValue(min);
        }
    }, [cartItems, productId, min]);

    const increment = () => {
        if (value >= max) return;
        setValue((prev) => prev + 1);

        const item = cartItems.find((item) => item.id === productId);
        if (item) {
            updateCartItems((prev) =>
                prev.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: value + 1 }
                        : item,
                ),
            );
        } else {
            updateCartItems((prev) => [
                ...prev,
                { ...product!, quantity: value + 1 },
            ]);
        }
    };

    const decrement = () => {
        if (value <= 0) return;
        setValue((prev) => prev - 1);

        const product = cartItems.find((item) => item.id === productId);

        if (value === 1) {
            updateCartItems((prev) =>
                prev.filter((item) => item.id !== productId),
            );
        }

        if (product) {
            updateCartItems((prev) =>
                prev.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: value - 1 }
                        : item,
                ),
            );
        }
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
