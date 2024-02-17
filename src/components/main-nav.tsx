import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";

import { MainNavItem } from "@/types";
import { cn } from "@/utils";

export interface MainNavProps {
  className?: string;
  items: MainNavItem[];
}

export function MainNav({ className, items, ...props }: MainNavProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 w-full", className)} {...props}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={cn(
            "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
          )}
        >
          <FormattedMessage id={item.id} defaultMessage={item.title} />
        </Link>
      ))}
    </nav>
  );
}
