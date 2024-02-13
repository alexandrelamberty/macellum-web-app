import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "creamery",
    label: "creamery",
  },
  {
    value: "grocery_store",
    label: "grocery store",
  },
  {
    value: "fruits",
    label: "Fruits",
  },
  {
    value: "hygiene",
    label: "Hygiene",
  },
  {
    value: "vegetables",
    label: "Vegetables",
  },
  {
    value: "fruits",
    label: "Fruits",
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
