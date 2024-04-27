import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem,  SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { genders } from "@/constants/customer";

const customerFormSchema = z.object({
    code: z.string().min(1, { message: "Code is required." }),
    national_number: z.string().min(1, { message: "Code is required." }),
    first_name: z
        .string({ required_error: "Please enter a name." })
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
	last_name: z
        .string({ required_error: "Please enter a name." })
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    birthdate: z.string(),
	gender: z.string(),
	address_street: z.string(),
	address_number: z.string(),
	address_postal_code: z.string(),
	address_city: z.string(),
	phone: z.string(),
	email: z.string(),
	// notes: z.string(),
});

type CustomerFormValues = z.infer<typeof customerFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<CustomerFormValues> = {
};

export function CustomerForm() {
    // Load providers

    const form = useForm<CustomerFormValues>({
        resolver: zodResolver(customerFormSchema),
        defaultValues,
    });

    function onSubmit(data: CustomerFormValues) {
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
					{/*  */}
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
                        name="national_number"
                        render={({ field }) => (
                            <FormItem className="col-span-4">
                                <FormLabel>National Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="National Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

				<div className="grid grid-cols-2 gap-4">
					{/*  First Name */}
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>First Name</FormLabel>
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
                        name="last_name"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

				<div className="grid grid-cols-2 gap-4">
					{/*  Birth Date */}
                    <FormField
                        control={form.control}
                        name="birthdate"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Birth date</FormLabel>
                                <FormControl>
                                    <Input placeholder="YYYY-MM-DD" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
					{/*  Gender */}
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Gender</FormLabel>
								 <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                className="text-muted-foreground"
                                                placeholder="Select a gender..."
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {genders.map((gender) => (
                                            <SelectItem key={gender.value} value={gender.value}>
                                                {gender.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

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
