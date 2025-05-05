import { useEffect, useState } from "react";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };
}

export default useFetchProducts;
