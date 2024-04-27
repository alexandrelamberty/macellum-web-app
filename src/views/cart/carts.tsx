import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { CalendarDateRangePicker } from "@/components/date-range-picker";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppDispatch, RootState } from "@/store";
import { fetchAllCarts } from "@/store/actions/cart.actions";
import { CartDataTable } from "@/views/cart/components/cart-data-table";
import { cartColumns } from "@/views/cart/components/data-table-columns";

export const Carts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const carts = useSelector((state: RootState) => state.carts.carts);

    useEffect(() => {
        dispatch(fetchAllCarts());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Carts">
                <CalendarDateRangePicker />
                <Button variant="outline">Today</Button>
                {/* Active carts all dates */}
                {/* Close carts date filtered */}

                {/* Show detail for a close carts */}
                <Dialog modal={true}>
                    <DialogTrigger asChild>
                        <Button variant="outline">New cart</Button>
                    </DialogTrigger>

                    <DialogContent
                        className="sm:max-w-[800px]"
                        onInteractOutside={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <DialogHeader>
                            <DialogTitle>Cart</DialogTitle>
                            <DialogDescription>
                                Make changes to your cart here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </PageHeader>
            <CartDataTable data={carts} columns={cartColumns} />
        </div>
    );
};
