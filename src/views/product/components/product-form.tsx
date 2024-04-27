import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { categories, productTypes } from "@/constants/product";

const providers = [
    { label: "Colruyt", value: "colruyt" },
    { label: "Delhaize", value: "delhaize" },
];

const productFormSchema = z.object({
    code: z.string().min(1, { message: "Code is required." }),
    name: z
        .string({ required_error: "Please enter a name." })
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    brand: z
        .string()
        .min(2, {
            message: "Brand must be at least 2 characters.",
        })
        .max(30, {
            message: "Brand must not be longer than 30 characters.",
        }),
    providers: z.array(z.string().trim()),
    category: z.string({
        required_error: "Please select a category.",
    }),
    productType: z.string({
        required_error: "Please select a product type.",
    }),
    weight: z.object({
      value: z.number(),
      unit: z.string()
    })
});

type ProductFormValues = z.infer<typeof productFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProductFormValues> = {
    providers: [],
    // dob: new Date("2023-01-23"),
};

export function ProductForm() {
    // Load providers

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues,
    });

    function onSubmit(data: ProductFormValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-6 gap-4">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-4">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Product name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-8 gap-4">
                    <FormField
                        control={form.control}
                        name="productType"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                className="text-muted-foreground"
                                                placeholder="Select a type..."
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {productTypes.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>
                                                {type.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="col-span-4">
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                className="text-muted-foreground"
                                                placeholder="Select a category..."
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category.value} value={category.value}>
                                                {category.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>Brand</FormLabel>
                                <FormControl>
                                    <Input placeholder="Brand" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <FormField
                        control={form.control}
                        name="providers"
                        render={({ field }) => (
                            <FormItem className="col-span-3">
                                <FormLabel>Providers</FormLabel>
                                <MultiSelect
                                    selected={field.value}
                                    options={providers}
                                    {...field}
                                    className="sm:w-[510px]"
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <FormField
                        control={form.control}
                        name="weight.value"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Packaging Weight</FormLabel>
                                <FormControl>
                                    <Input placeholder="Brand" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="weight.unit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Unit</FormLabel>
                                <FormControl>
                                    <Input placeholder="Brand" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit">Save</Button>
            </form>
        </Form>
    );
}
