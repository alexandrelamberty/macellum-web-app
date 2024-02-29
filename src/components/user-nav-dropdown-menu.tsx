import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store";
import { NavItem } from "@/types";

export const UserNavDropdownMenu = ({ menu }: { menu: NavItem[] }) => {
    const navigate = useNavigate();
    const authUser = useSelector((state: RootState) => state.auth.auth);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@alexandrelamberty" />
                        <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem
                    className="font-normal"
                    onClick={() => {
                        console.log("Profile");
                        navigate("/profile");
                    }}
                >
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            <FormattedMessage
                                id="app.user-nav.welcome-prompt"
                                description="User nav welcome prompt"
                                defaultMessage="Welcome, {name}"
                                values={{
                                    name: authUser!.firstName + " " + authUser!.lastName,
                                }}
                            />
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">{authUser!.token}</p>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {menu.map((item: NavItem, index) => (
                    <DropdownMenuItem
                        key={index}
                        onClick={() => {
                            navigate(item.href);
                        }}
                    >
                        <FormattedMessage id={item.id} defaultMessage={item.title} description="Link user nav" />
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        console.log("Logout");
                        navigate("/logout");
                    }}
                >
                    <FormattedMessage id="app.user-nav.logout" defaultMessage="Log out" description="Link user nav" />
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
