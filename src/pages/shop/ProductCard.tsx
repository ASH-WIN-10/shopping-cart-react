import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "./useFetchProducts";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function AddToCartButton() {
    function handleCartButton() {
        toast.success("Added to cart");
    }

    return <Button onClick={handleCartButton}>Add to Cart</Button>;
}

function ProductCard({ product }: { product: Product }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = product.image;
        img.onload = () => setLoading(false);
    }, [product.image]);

    return (
        <Card className="cursor-pointer transition-transform duration-200 hover:scale-105">
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
                <div className="block text-left">
                <div className="block w-full text-left">
                    <p className="text-md line-clamp-1" title={product.title}>
                        {product.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-xl font-bold">${product.price}</p>
                        <AddToCartButton />
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
