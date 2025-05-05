import { useOutletContext, useParams } from "react-router-dom";
import NotFound from "@/pages/misc/NotFound";
import Error from "@/pages/misc/Error";
import AddToCartButton from "../AddToCard";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Star } from "lucide-react";
import { useFetchProduct } from "../productsAPI";
import { useEffect, useState } from "react";
import CounterInput from "@/pages/misc/CounterInput";
import { ShopContext } from "../Shop";

function ProductPage() {
    const [cartItems, updateCartItems] = useOutletContext<ShopContext>();
    const [imgLoading, setImgLoading] = useState(true);
    const params = useParams();

    if (params.productId === undefined) return <Error />;
    const productId = parseInt(params.productId, 10);
    if (isNaN(productId) || productId <= 0) return <NotFound />;

    const { product, loading, error } = useFetchProduct(productId);

    useEffect(() => {
        if (!product) return;
        const img = new Image();
        img.src = product.image;
        img.onload = () => setImgLoading(false);
    }, [product?.image]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <LoaderCircle size={64} className="text-primary animate-spin" />
            </div>
        );
    }
    if (error || !product) return <Error />;

    return (
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-5 p-10 md:flex-nowrap md:justify-normal lg:px-20">
            <div className="md:sticky md:top-10">
                <div className="w-66 rounded-lg border-1 py-10">
                    {imgLoading ? (
                        <div className="mx-auto flex h-64 w-56 items-center justify-center">
                            <LoaderCircle
                                size={64}
                                className="text-primary animate-spin"
                            />
                        </div>
                    ) : (
                        <img
                            src={product.image}
                            alt={product.title + " image"}
                            className="mx-auto h-64 w-56"
                        />
                    )}
                </div>

                <div className="mt-5 flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-2">
                        <CounterInput
                            min={0}
                            max={10}
                            cartItems={cartItems}
                            updateCartItems={updateCartItems}
                            productId={product.id}
                            productQuantity={(() => {
                                const item = cartItems.find(
                                    (item) => item.id === product.id,
                                );
                                return item ? item.quantity : 0;
                            })()}
                        />
                        <AddToCartButton productId={product.id} />
                    </div>
                    <div>
                        <Button>Buy Now</Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <span className="text-3xl font-bold">{product.title}</span>
                    <span className="text-md flex items-center">
                        <span>
                            Rated <b>{product.rating.rate}</b>
                        </span>
                        <Star
                            className="mx-1 inline"
                            size={16}
                            fill="yellow"
                            strokeWidth="1px"
                        />
                        <span>
                            by <b>{product.rating.count} users</b>
                        </span>
                    </span>
                </div>
                <span className="text-2xl font-bold">${product.price}</span>
                <div className="text-md">
                    <span className="font-bold">Description: </span>
                    <span>{product.description}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
