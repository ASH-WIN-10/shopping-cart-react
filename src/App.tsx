import { Outlet } from "react-router-dom";
import Header from "./pages/misc/Header";

function App() {
    return (
        <div className="bg-background">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
