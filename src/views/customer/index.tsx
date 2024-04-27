import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AppDispatch, RootState } from "@/store";
import { fetchAllCustomers } from "@/store/actions/customer.actions";
import { CustomerDataTable } from "@/views/customer/components/customer-data-table";
import { customerColumns } from "@/views/customer/components/data-table-columns";

import { CustomerForm } from "./components/customer-form";

export function Customers() {
    const dispatch = useDispatch<AppDispatch>();
    const customers = useSelector((state: RootState) => state.customers.customers);

    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Customers">
                <Dialog modal={true}>
                    <DialogTrigger asChild>
                        <Button variant="outline">New customer</Button>
                    </DialogTrigger>
                    <DialogContent
                        className="sm:max-w-[600px]"
                        onInteractOutside={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Customer</DialogTitle>
                            <DialogDescription>Create a new customer. Click save when you're done.</DialogDescription>
                        </DialogHeader>
                        <CustomerForm />
                    </DialogContent>
                </Dialog>
            </PageHeader>
            <CustomerDataTable data={customers} columns={customerColumns} />
        </div>
    );
}
