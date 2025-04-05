import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "./useFetchProducts";

function ProductCard({ product }: { product: Product }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = product.image;
        img.onload = () => setLoading(false);
    }, [product.image]);

    if (loading) {
        return (
            <Card className="cursor-pointer transition-transform duration-200 hover:scale-105">
                <CardHeader>
                    <div className="mx-auto flex h-64 w-56 items-center justify-center">
                        <LoaderCircle
                            size={64}
                            className="text-primary animate-spin"
                        />
                    </div>
                </CardHeader>
                <CardFooter className="block text-left">
                    <p className="line-clamp-1 text-lg" title={product.title}>
                        {product.title}
                    </p>
                    <p className="text-xl font-bold">${product.price}</p>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card className="cursor-pointer transition-transform duration-200 hover:scale-105">
            <CardHeader>
                <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto h-64 w-56"
                />
            </CardHeader>
            <CardFooter className="block text-left">
                <p className="line-clamp-1 text-lg" title={product.title}>
                    {product.title}
                </p>
                <p className="text-xl font-bold">${product.price}</p>
            </CardFooter>
        </Card>
    );
}

export default ProductCard;
