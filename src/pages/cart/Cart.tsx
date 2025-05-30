import { useOutletContext } from "react-router-dom";
import { Product } from "../shop/productsAPI";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CounterInput from "@/pages/misc/CounterInput";
import { Trash2 } from "lucide-react";

function Cart() {
    const [cartItems, updateCartItems] =
        useOutletContext<
            [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
        >();

    function handleRemoveItem(e: React.MouseEvent) {
        const id = parseInt(
            (e?.currentTarget as HTMLButtonElement).dataset.product_id!,
        );
        updateCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    if (cartItems.length === 0) {
        return (
            <div className="flex h-full items-center justify-center">
                <span className="text-2xl font-bold">Cart is empty!!</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto flex flex-col gap-8 p-10">
            <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                    <Card className="p-4" key={item.id}>
                        <div className="flex flex-wrap gap-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-24 w-20"
                            />

                            <div className="flex flex-col justify-center">
                                <span className="text-xl">{item.title}</span>
                                <span className="text-xl font-bold">
                                    ${item.price}
                                </span>
                            </div>

                            <div className="ml-auto flex gap-4 self-center">
                                <CounterInput
                                    min={1}
                                    max={10}
                                    cartItems={cartItems}
                                    updateCartItems={updateCartItems}
                                    productId={item.id}
                                    productQuantity={item.quantity}
                                />

                                <Button
                                    className="cursor-pointer"
                                    variant="destructive"
                                    data-product_id={item.id}
                                    onClick={handleRemoveItem}
                                >
                                    <Trash2 />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <hr />

            <div>
                <div className="text-right text-2xl font-bold">
                    <span>Total: </span>
                    <span>
                        $
                        {cartItems
                            .reduce(
                                (acc, item) =>
                                    acc + item.price * (item.quantity || 0),
                                0,
                            )
                            .toFixed(2)}
                    </span>
                </div>

                <div>
                    <Button
                        className="mt-4 w-full cursor-pointer"
                        variant={"default"}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
