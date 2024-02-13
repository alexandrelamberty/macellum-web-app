import PageHeader from "@/components/page-header";
import { SidebarNav } from "@/components/sidebar-nav";

const settingsNavigation = [
  {
    title: "Account",
    href: "/settings",
  },
  {
    title: "Profile",
    href: "/settings/profile",
    items: null,
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
    items: null,
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
    items: null,
  },
  {
    title: "Display",
    href: "/examples/forms/display",
    items: null,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export const Settings = ({ children }: SettingsLayoutProps) => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <PageHeader title="Settings"></PageHeader>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SidebarNav items={settingsNavigation} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
};
