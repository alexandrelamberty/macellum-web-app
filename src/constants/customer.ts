import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
];

export const statuses = [
    {
        value: "active",
        label: "Active",
        icon: CheckCircledIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: CrossCircledIcon,
    },
];

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRightIcon,
    },
    {
        label: "High",
        value: "high",
        icon: ArrowUpIcon,
    },
];

export const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Non-binary", value: "non-binary" },
];


