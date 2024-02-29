import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CircleIcon } from "lucide-react";

export const labels = [
    {
        value: "default",
        label: "Default",
    },
];

export const statuses = [
    {
        value: "pending",
        label: "Pending",
        icon: CircleIcon,
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

export const views = [
    {
        value: "today",
        label: "today",
    },
    {
        value: "week",
        label: "Week",
    },
    {
        value: "month",
        label: "Month",
    },
    {
        value: "year",
        label: "Year",
    },
];
