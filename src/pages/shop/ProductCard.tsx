import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "./useFetchProducts";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { ShopContext } from "./Shop";

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
            <Button variant="outline">
                <Link to="/cart">Go to Cart</Link>
            </Button>
        );

    return <Button onClick={handleAddToCartButton}>Add to Cart</Button>;
}

function ProductCard({
    product,
    products,
}: {
    product: Product;
    products: Product[];
}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = product.image;
        img.onload = () => setLoading(false);
    }, [product.image]);

    function goToProductPage(e: React.MouseEvent) {
        if (
            e.target instanceof HTMLButtonElement ||
            e.target instanceof HTMLAnchorElement
        )
            return;

        navigate(`/shop/product/${product.id}`);
    }

    return (
        <Card
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={goToProductPage}
        >
            <CardHeader>
                {loading ? (
                    <div className="mx-auto flex h-64 w-56 items-center justify-center">
                        <LoaderCircle
                            size={64}
                            className="text-primary animate-spin"
                        />
                    </div>
                ) : (
                    <img
                        src={product.image}
                        alt={product.title}
                        className="mx-auto h-64 w-56"
                    />
                )}
            </CardHeader>
            <CardFooter>
                <div className="block w-full text-left">
                    <p className="text-md line-clamp-1" title={product.title}>
                        {product.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-xl font-bold">${product.price}</p>
                        <AddToCartButton
                            products={products}
                            productId={product.id}
                        />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
