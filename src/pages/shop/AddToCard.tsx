import { Link, useOutletContext } from "react-router-dom";
import { Product } from "./useFetchProducts";
import { ShopContext } from "./Shop";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function AddToCartButton({
    productId,
    products,
}: {
    productId: number;
    products: Product[];
}) {
    const [, { cartItems, updateCartItems }] = useOutletContext<ShopContext>();

    function getProduct(id: number): Product | undefined {
        return products.find((product) => product.id === id);
    }

    function handleAddToCartButton() {
        const product = getProduct(productId);

        if (cartItems.some((item) => item.id === productId))
            toast.error("Item already in cart");
        else {
            updateCartItems((prev) => [...prev, product!]);
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
