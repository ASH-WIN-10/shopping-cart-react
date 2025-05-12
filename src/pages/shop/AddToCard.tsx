import { Link, useOutletContext } from "react-router-dom";
import { useFetchProduct } from "./productsAPI";
import { ShopContext } from "./Shop";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function AddToCartButton({ productId }: { productId: number }) {
    const [cartItems, updateCartItems] = useOutletContext<ShopContext>();
    const { product } = useFetchProduct(productId);

    function handleAddToCartButton() {
        if (!product) {
            console.error("Product not found");
            return;
        }

        if (cartItems.some((item) => item.id === productId))
            toast.error("Item already in cart");
        else {
            product.quantity = 1;
            updateCartItems((prev) => [...prev, product]);
            toast.success("Item added to cart");
        }
    }

    if (cartItems.some((item) => item.id === productId))
        return (
            <Link to="/cart">
                <Button variant="outline">Go to Cart</Button>
            </Link>
        );

    return <Button onClick={handleAddToCartButton}>Add to Cart</Button>;
}

export default AddToCartButton;
