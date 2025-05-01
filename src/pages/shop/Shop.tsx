import ProductCard from "./ProductCard";
import { LoaderCircle } from "lucide-react";
import useFetchProducts from "./useFetchProducts";

function Shop() {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <LoaderCircle size={64} className="text-primary animate-spin" />
            </div>
        );
    }

    if (error) {
        console.error(error);
        return <div>Sorry something went wrong &semi;&rbbrk;</div>;
    }

    return (
        <div className="container mx-auto p-10">
            {products.length === 0 ? (
                <div>Sorry something went wrong &semi;&rbbrk;</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            products={products}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Shop;
