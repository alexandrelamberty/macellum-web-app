import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const providerFormSchema = z.object({
    name: z
        .string({ required_error: "Please enter a name." })
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
   	address_street: z.string(),
	address_number: z.string(),
	address_postal_code: z.string(),
	address_city: z.string(),
	phone: z.string(),
	email: z.string(),

});

type ProviderFormValues = z.infer<typeof providerFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProviderFormValues> = {
    // dob: new Date("2023-01-23"),
};

export function ProviderForm() {
    // Load providers

    const form = useForm<ProviderFormValues>({
        resolver: zodResolver(providerFormSchema),
        defaultValues,
    });

    function onSubmit(data: ProviderFormValues) {
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
                <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-4">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Provider name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
 
             	<div className="grid grid-cols-2 gap-4">
					{/*  Address Street */}
                    <FormField
                        control={form.control}
                        name="address_street"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Street</FormLabel>
                                <FormControl>
                                    <Input placeholder="Street" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
					{/*  Address Number */}
                    <FormField
                        control={form.control}
                        name="address_number"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

				<div className="grid grid-cols-2 gap-4">
					{/*  Address Postal Code */}
                    <FormField
                        control={form.control}
                        name="address_postal_code"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                    <Input placeholder="Postal Code" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
					{/*  Address City */}
                    <FormField
                        control={form.control}
                        name="address_city"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

				<div className="grid grid-cols-2 gap-4">
					{/*  Phone */}
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
					{/*  Last Name */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} />
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
