
import { Outlet, Route, Routes } from "react-router-dom";

import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { UserNav } from "@/components/user-nav";
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

const mainNavigation = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Calendars",
    href: "/calendars",
  },
  {
    title: "Customers",
    href: "/customers",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Orders",
    href: "/orders",
  },
  {
    title: "Providers",
    href: "/providers",
  },
  {
    title: "Carts",
    href: "/carts",
  },
  {
    title: "Team",
    href: "/team",
  },
];

function App() {
  const { toast } = useToast();

  toast({
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  });

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
          <Route
            index
            element={<Settings children={<SettingsAccountPage />} />}
          />
          <Route
            path="profile"
            element={<Settings children={<SettingsProfilePage />} />}
          />
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
            <Button className="text-sm font-medium right-0">
              {/* <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> */}
              Cashier
            </Button>
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
