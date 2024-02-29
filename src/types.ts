import { Icons } from "@/components/icons";

export interface NavItem {
    id: string;
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}

export interface UserNavItem extends NavItem {
    action: () => void;
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItem {}
