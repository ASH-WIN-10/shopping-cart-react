import { Outlet, useOutletContext } from "react-router-dom";
import { Product } from "./productsAPI";

export type ShopContext = [
    cartItems: Product[],
    updateCartItems: React.Dispatch<React.SetStateAction<Product[]>>,
];

function Shop() {
    const [cartItems, updateCartItems] =
        useOutletContext<
            [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
        >();

    const context: ShopContext = [cartItems, updateCartItems];

    return <Outlet context={context} />;
}

export default Shop;
