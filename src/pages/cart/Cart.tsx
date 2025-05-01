import { useOutletContext } from "react-router-dom";
import { Product } from "../shop/useFetchProducts";

function Cart() {
    const [cartItems, updateCartItems] =
        useOutletContext<
            [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
        >();

    return <div>This is the cart</div>;
}

export default Cart;
