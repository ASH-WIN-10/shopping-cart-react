import { Outlet, useOutletContext } from "react-router-dom";
import useFetchProducts, { Product } from "./useFetchProducts";

export type ShopContext = [
    {
        products: Product[];
        loading: boolean;
        error: string | null;
    },
    {
        cartItems: Product[];
        updateCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    },
];

function Shop() {
    const [cartItems, updateCartItems] =
        useOutletContext<
            [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
        >();
    const { products, loading, error } = useFetchProducts();

    const context: ShopContext = [
        { products, loading, error },
        { cartItems, updateCartItems },
    ];

    return <Outlet context={context} />;
}

export default Shop;
