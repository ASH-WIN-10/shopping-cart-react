import { Outlet } from "react-router-dom";
import Header from "./pages/misc/Header";
import { Toaster } from "sonner";
import { Product } from "./pages/shop/useFetchProducts";
import { useState } from "react";

function App() {
    const [cartItems, updateCartItems] = useState<Product[]>([]);

    return (
        <div className="bg-background">
            <Header />
            <main>
                <Outlet context={[cartItems, updateCartItems]} />
                <Toaster />
            </main>
        </div>
    );
}

export default App;
