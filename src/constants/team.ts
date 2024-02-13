import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const labels = [
  {
    value: "staff",
    label: "Staff",
  },
  {
    value: "volunteer",
    label: "Volunteer",
  },
];

export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: CheckCircledIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: CrossCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];
