import { Outlet } from "react-router-dom";
import Header from "./pages/misc/Header";
import { Toaster } from "sonner";

function App() {
    return (
        <div className="bg-background">
            <Header />
            <main>
                <Outlet />
                <Toaster />
            </main>
        </div>
    );
}

export default App;
