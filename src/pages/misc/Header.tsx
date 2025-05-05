import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header({ cartItemsLength }: { cartItemsLength: number }) {
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
                        <NavItem
                            to="/cart"
                            isIcon
                            itemsLength={cartItemsLength}
                        >
                            <ShoppingCart />
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

function NavItem({
    to,
    isIcon,
    itemsLength,
    children,
}: {
    to: string;
    isIcon?: boolean;
    itemsLength?: number;
    children: React.ReactNode;
}) {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <button
                    className={cn(
                        isIcon
                            ? "hover:bg-secondary/25 rounded-full p-2"
                            : "hover:bg-secondary/25 rounded-sm px-3 py-1 text-lg font-extrabold",
                        isActive && "bg-secondary/25",
                    )}
                >
                    {isIcon && (itemsLength || 0) > 0 && (
                        <div className="absolute top-4 right-5 grid size-5 place-items-center rounded-full bg-red-600 text-xs">
                            {itemsLength}
                        </div>
                    )}
                    {children}
                </button>
            )}
        </NavLink>
    );
}

export default Header;
