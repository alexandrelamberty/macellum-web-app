import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const categories = [
  {
    value: "creamery",
    label: "Crèmerie/Lait",
  },
  {
    value: "grocery_store",
    label: "Epicerie/Biscuits",
  },
  {
    value: "fruits",
    label: "Epicerie/Bocaux - Conserves",
  },
  {
    value: "hygiene",
    label: "Epicerie/Café - Thé",
  },
  {
    value: "vegetables",
    label: "Epicerie/Confiserie",
  },
  {
    value: "fruits",
    label: "Epicerie/Céréales",
  },
];

export const statuses = [
  {
    value: "in stock",
    label: "In Stock",
    icon: CheckCircledIcon,
  },
  {
    value: "out of stock",
    label: "Out of Stock",
    icon: CrossCircledIcon,
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
