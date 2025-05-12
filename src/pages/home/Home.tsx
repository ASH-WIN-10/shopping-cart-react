import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-primary min-h-screen">
            {/* Hero Section */}
            <div className="text-primary bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-5xl font-bold">
                            Welcome to Our Shopping Experience
                        </h1>
                        <p className="mb-8 text-xl text-gray-600">
                            Discover amazing products at unbeatable prices
                        </p>
                        <Link to="/products">
                            <Button>Shop Now</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-200 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="rounded-lg bg-white/10 p-6 text-center shadow-sm backdrop-blur-sm">
                            <div className="mb-4 text-4xl">🚚</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Fast Delivery
                            </h3>
                            <p>
                                Get your orders delivered quickly and reliably
                            </p>
                        </div>
                        <div className="rounded-lg bg-white/10 p-6 text-center shadow-sm backdrop-blur-sm">
                            <div className="mb-4 text-4xl">💎</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Quality Products
                            </h3>
                            <p>Curated selection of premium items</p>
                        </div>
                        <div className="rounded-lg bg-white/10 p-6 text-center shadow-sm backdrop-blur-sm">
                            <div className="mb-4 text-4xl">🛡️</div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Secure Shopping
                            </h3>
                            <p>Safe and protected transactions</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-primary bg-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold">
                        Ready to Start Shopping?
                    </h2>
                    <p className="mb-8 text-gray-600">
                        Browse our collection of amazing products
                    </p>
                    <Link to="/products">
                        <Button>View Products</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
