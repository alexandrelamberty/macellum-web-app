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
import { OrderForm } from "@/views/order/components/order-form";

export const OrderNew = () => {
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
                    </DialogContent>
                </Dialog>
            </PageHeader>
			<OrderForm />
        </div>
    );
};
