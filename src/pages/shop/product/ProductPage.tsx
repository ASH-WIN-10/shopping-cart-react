import { useOutletContext, useParams } from "react-router-dom";
import { ShopContext } from "../Shop";
import NotFound from "@/pages/misc/NotFound";
import Error from "@/pages/misc/Error";
import AddToCartButton from "../AddToCard";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

function ProductPage() {
    const [{ products }] = useOutletContext<ShopContext>();
    const params = useParams();

    if (params.productId === undefined) return <Error />;

    const productId = parseInt(params.productId, 10);
    if (isNaN(productId) || productId <= 0 || productId > products.length)
        return <NotFound />;

    const product = products.find((product) => product.id === productId);
    if (!product) return <Error />;

    return (
        <div className="container mx-auto flex items-center gap-5 p-10 px-20">
            <div className="sticky top-10">
                <div className="w-66 rounded-lg border-1 py-10">
                    <img
                        src={product.image}
                        alt={product.title + " image"}
                        className="mx-auto h-64 w-56"
                    />
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                    <AddToCartButton
                        products={products}
                        productId={product.id}
                    />
                    <Button variant="outline">Buy Now</Button>
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
