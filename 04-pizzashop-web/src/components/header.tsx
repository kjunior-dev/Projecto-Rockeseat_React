import {Home, Pizza, UtensilsCrossed} from "lucide-react";
import {Separator} from "@radix-ui/react-separator";
import {NavLink} from "./nav-link.tsx";
import {ThemeToggle} from "./theme/theme-toggle.tsx";
import {AccountMenu} from "./account-menu.tsx";

export function Header(){
    return(
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
                 <div className="flex gap-2">
                     <Pizza className="h-6 w-6"/>
                     <span className="text-rose-900 dark:text-rose-500">Pizza</span>
                     <span className="text-black dark:text-white">Shop</span>
                 </div>

                <Separator orientation="vertical" className="h-6"/>

                <nav className="flex items-center space-x-4 lg:space-x-6">

                    <NavLink to="/">
                        <Home className="h-6 w-6"/>
                        Início
                    </NavLink>

                    <NavLink to="/orders">
                        <UtensilsCrossed className="h-6 w-6"/>
                        Pedidos
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle/> {/* Button mode dark */}
                    <AccountMenu/>
                </div>
            </div>
        </div>
    )
}