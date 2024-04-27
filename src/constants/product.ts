import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const categories = [
    {
        value: "biscuits",
        label: "Biscuits",
    },
    {
        value: "fruits",
        label: "Bocaux - Conserves",
    },
    {
        value: "hygiene",
        label: "Café - Thé",
    },
    {
        value: "confiserie",
        label: "Confiserie",
    },
    {
        value: "cereales",
        label: "Céréales",
    },
    {
        value: "hygiene",
        label: "Hygiene",
    },
    {
        value: "lait",
        label: "Lait",
    },
    {
        value: "lessive",
        label: "Lessive",
    },
    {
        value: "pates",
        label: "Pates",
    },
    {
        value: "produits_nettoyants",
        label: "Produits Nettoyants",
    },
    {
        value: "riz",
        label: "Riz",
    },
    {
        value: "riz",
        label: "Sauces, Huile et Condiments",
    },
    {
        value: "riz",
        label: "Sirops et Jus",
    },
];

export const productTypes = [
    { label: "Food", value: "food" },
    { label: "Non-Food", value: "non_food" },
] as const;

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

export const units = [
    {
        label: "g",
        value: "g",
    },
    {
        label: "kg",
        value: "kg",
    },
    {
        label: "L",
        value: "L",
    },
    {
        label: "ml",
        value: "ml",
    },
    {
        label: "pcs",
        value: "pcs",
    },
];
