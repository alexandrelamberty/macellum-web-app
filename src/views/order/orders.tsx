import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CalendarDateRangePicker } from "@/components/date-range-picker";
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
import { fetchAllOrders } from "@/store/actions/order.actions";
import { orderColumns } from "@/views/order/components/data-table-columns";
import { OrderDataTable } from "@/views/order/components/order-data-table";
import { OrderForm } from "@/views/order/components/order-form";

export const Orders = () => {
    const dispatch = useDispatch<AppDispatch>();
    const orders = useSelector((state: RootState) => state.orders.orders);

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Orders">
                <CalendarDateRangePicker />
                <Dialog modal={true}>
                    <DialogTrigger asChild>
                        <Button variant="outline">New order</Button>
                    </DialogTrigger>
                    <DialogContent
                        className="sm:max-w-[600px]"
                        onInteractOutside={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Order</DialogTitle>
                            <DialogDescription>Create a new order. Click save when you're done.</DialogDescription>
                        </DialogHeader>
                        <OrderForm />
                    </DialogContent>
                </Dialog>
            </PageHeader>
            <OrderDataTable data={orders} columns={orderColumns} />
        </div>
    );
};
