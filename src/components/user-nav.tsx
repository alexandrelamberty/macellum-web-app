import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownMenuLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  // TODO: check fix
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  return <Link to={to}>{children}</Link>;
};

export const UserNav = () => {
  // TODO: Fetch user profile or retrieve state from login?

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
        <DropdownMenuItem className="font-normal">
          <DropdownMenuLink to="/@alexandrelamberty">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                alexandrelamberty
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                alexandrelamberty@gmail.com
              </p>
            </div>
          </DropdownMenuLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropdownMenuLink to="/settings">Settings</DropdownMenuLink>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            console.log("Logout");
          }}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
