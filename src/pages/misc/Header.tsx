import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-primary text-secondary flex items-center justify-between p-6">
            <span className="text-2xl font-extrabold">Shopping Cart</span>
            <nav>
                <ul className="flex items-center gap-5">
                    <li>
                        <NavItem to="/">Home</NavItem>
                    </li>
                    <li>
                        <NavItem to="/shop">Shop</NavItem>
                    </li>
                    <li>
                        <NavItem to="/cart">Cart</NavItem>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    "text-secondary hover:text-secondary/75 text-sm",
                    isActive && "text-lg font-extrabold",
                )
            }
        >
            {children}
        </NavLink>
    );
}

export default Header;
