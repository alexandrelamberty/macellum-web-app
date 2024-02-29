import { SectionHeader } from "@/components/section-header";
import { ProfileForm } from "@/views/settings/components/profile-form";

export const SettingsProfilePage = () => {
    return (
        <div className="space-y-6">
            <SectionHeader title="Profile" description="Update your profile settings." />
            <ProfileForm />
        </div>
    );
};
