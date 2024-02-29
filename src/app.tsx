import { useEffect, useState } from "react";

import { FormattedMessage, useIntl } from "react-intl";
import { Outlet, Route, Routes } from "react-router-dom";

import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { UserNavDropdownMenu } from "@/components/user-nav-dropdown-menu";
import { Register } from "@/views/auth/register";
import { SignIn } from "@/views/auth/sign-in";
import { Calendars } from "@/views/calendar";
import { Carts } from "@/views/cart/carts";
import { Customers } from "@/views/customer";
import { Dashboard } from "@/views/dashboard";
import { NoMatch } from "@/views/no-match";
import { Orders } from "@/views/order/orders";
import { Privacy } from "@/views/privacy";
import { Products } from "@/views/product/products";
import { Providers } from "@/views/provider/providers";
import { Settings } from "@/views/settings";
import { SettingsAccountPage } from "@/views/settings/views/account";
import { SettingsProfilePage } from "@/views/settings/views/profile";
import { Team } from "@/views/team";
import { Terms } from "@/views/terms";

import LanguageSwitcher from "./components/language-switcher";
import { useAppDispatch, useAppSelector } from "./hooks/store";
import { RootState } from "./store";
import { MainNavItem } from "./types";
import Loading from "./views/loading";
import { fetchSettings } from "./store/actions/settings.actions";

let mainNavigation: MainNavItem[];
let userNavigation: MainNavItem[];

function App() {
    const intl = useIntl();
    // const { toast } = useToast();
    const dispatch = useAppDispatch();
    // const {settings, loading, error } = useAppSelector((state: RootState) => state.settings);


    // FetchSettings
    dispatch(fetchSettings);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    mainNavigation = [
        {
            id: "menu.dashboard",
            title: intl.formatMessage({
                id: "menu.dashboard",
                defaultMessage: "Dashboard",
                description: "dashboard menu item",
            }),
            href: "/",
        },
        {
            id: "menu.calendars",
            title: intl.formatMessage({
                id: "menu.calendars",
                defaultMessage: "Calendars",
                description: "calendars menu item",
            }),
            href: "/calendars",
        },
        {
            id: "menu.customers",
            title: intl.formatMessage({
                id: "menu.customers",
                defaultMessage: "Customers",
                description: "customers menu item",
            }),
            href: "/customers",
        },
        {
            id: "menu.products",
            title: intl.formatMessage({
                id: "menu.products",
                defaultMessage: "Products",
                description: "products menu item",
            }),
            href: "/products",
        },
        {
            id: "menu.orders",
            title: intl.formatMessage({
                id: "menu.orders",
                defaultMessage: "Orders",
                description: "orders menu item",
            }),
            href: "/orders",
        },
        {
            id: "menu.providers",
            title: intl.formatMessage({
                id: "menu.providers",
                defaultMessage: "Providers",
                description: "providers menu item",
            }),
            href: "/providers",
        },
        {
            id: "menu.carts",
            title: intl.formatMessage({
                id: "menu.carts",
                defaultMessage: "Carts",
                description: "carts menu item",
            }),
            href: "/carts",
        },
        {
            id: "menu.team",
            title: intl.formatMessage({
                id: "menu.team",
                defaultMessage: "Team",
                description: "team menu item",
            }),
            href: "/team",
        },
    ];

    userNavigation = [
        {
            id: "menu.user.settings",
            title: intl.formatMessage({
                id: "menu.settings",
                defaultMessage: "Settings",
                description: "user menu settings menu item",
            }),
            href: "/settings",
        },
        {
            id: "menu.user.logout",
            title: intl.formatMessage({
                id: "menu.settings",
                defaultMessage: "Settings",
                description: "user logout menu item",
            }),
            href: "/settings",
            //   action: () =>
            //     dispatch(logout()),
        },
    ];

    if (isLoading) {
        return <Loading />;
    }

    // toast({
    //     title: "Scheduled: Catch up",
    //     description: "Friday, February 10, 2023 at 5:57 PM",
    // });

    return (
        <Routes>
            <Route path="/auth" element={<NoLayout />}>
                <Route index element={<SignIn />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<SignIn />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="/" element={<NoLayout />}>
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<Privacy />} />
            </Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="calendars" element={<Calendars />} />
                <Route path="customers" element={<Customers />} />
                <Route path="products" element={<Products />} />
                <Route path="providers" element={<Providers />} />
                <Route path="orders" element={<Orders />} />
                <Route path="carts" element={<Carts />} />
                <Route path="team" element={<Team />} />
                <Route path="/settings">
                    <Route index element={<Settings children={<SettingsAccountPage />} />} />
                    <Route path="profile" element={<Settings children={<SettingsProfilePage />} />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

function NoLayout() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-1/4 md:w-1/4 sm:w-auto">
                <Outlet />
            </div>
        </div>
    );
}

function Layout() {
    return (
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 px-4">
                    {/* <TeamSwitcher /> */}
                    <MainNav className="mx-2 w-full" items={mainNavigation} />
                    <div className="ml-auto flex items-center space-x-4">
                        <LanguageSwitcher />
                        <Button className="text-sm font-medium right-0">
                            {/* <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> */}
                            <FormattedMessage
                                id="menu.cashier"
                                defaultMessage="Cashier"
                                description="cashier menu item"
                            />
                        </Button>
                        <Search />
                        <UserNavDropdownMenu menu={userNavigation} />
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
