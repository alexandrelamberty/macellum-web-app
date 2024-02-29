import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const labels = [
    {
        value: "grocery",
        label: "Grocery",
    },
];

export const statuses = [
    {
        value: "pending",
        label: "Pending",
        icon: CheckCircledIcon,
    },
    {
        value: "done",
        label: "Done",
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
