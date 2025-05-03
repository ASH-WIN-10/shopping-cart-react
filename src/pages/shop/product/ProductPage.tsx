import { useOutletContext, useParams } from "react-router-dom";
import { ShopContext } from "../Shop";
import NotFound from "@/pages/misc/NotFound";
import Error from "@/pages/misc/Error";

function ProductPage() {
    const [{ products }] = useOutletContext<ShopContext>();
    const params = useParams();

    if (params.productId === undefined) return <Error />;

    const productId = parseInt(params.productId, 10);
    if (isNaN(productId) || productId <= 0 || productId > products.length)
        return <NotFound />;

    return <div>This is the product {productId} page</div>;
}

export default ProductPage;
