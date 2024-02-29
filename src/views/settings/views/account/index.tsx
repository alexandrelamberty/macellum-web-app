import { SectionHeader } from "@/components/section-header";
import { AccountForm } from "@/views/settings/components/account-form";

export const SettingsAccountPage = () => {
    return (
        <div className="space-y-6">
            <SectionHeader title="Account" description="Update your account settings." />
            <AccountForm />
        </div>
    );
};
