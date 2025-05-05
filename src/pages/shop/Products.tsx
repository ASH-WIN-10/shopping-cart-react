import ProductCard from "./ProductCard";
import { LoaderCircle } from "lucide-react";
import Error from "../misc/Error";
import { useFetchProducts } from "./productsAPI";

function Products() {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <LoaderCircle size={64} className="text-primary animate-spin" />
            </div>
        );
    }

    if (error || products.length === 0) {
        console.error(error);
        return <Error />;
    }

    return (
        <div className="container mx-auto p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
