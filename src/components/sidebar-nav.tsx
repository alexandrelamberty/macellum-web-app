import { Link, useLocation } from "react-router-dom";

import { SidebarNavItem } from "@/types";
import { cn } from "@/utils";

export interface SidebarNavProps {
    items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
    const location = useLocation();
    const pathname = location.pathname;

    return items.length ? (
        <div className="w-full">
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={item.href}
                    className={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                        item.disabled && "cursor-not-allowed opacity-60",
                        pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
                    )}
                    target={item.external ? "_blank" : ""}
                    rel={item.external ? "noreferrer" : ""}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    ) : null;
}

interface SidebarNavItemsProps {
    items: SidebarNavItem[];
    pathname: string | null;
}

export function SidebarNavItems({ items, pathname }: SidebarNavItemsProps) {
    return items?.length ? (
        <div className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) =>
                item.href && !item.disabled ? (
                    <Link
                        key={index}
                        to={item.href}
                        className={cn(
                            "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                            item.disabled && "cursor-not-allowed opacity-60",
                            pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
                        )}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}
                    >
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                            </span>
                        )}
                    </Link>
                ) : (
                    <span
                        key={index}
                        className={cn(
                            "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
                            item.disabled && "cursor-not-allowed opacity-60",
                        )}
                    >
                        {item.title}
                        {item.label && (
                            <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                                {item.label}
                            </span>
                        )}
                    </span>
                ),
            )}
        </div>
    ) : null;
}
