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
import { fetchAllProviders } from "@/store/actions/provider.actions";
import { providerColumns } from "@/views/provider/components/data-table-columns";
import { ProviderDataTable } from "@/views/provider/components/provider-data-table";

import { ProviderForm } from "./components/provider-form";

export const Providers = () => {
    const dispatch = useDispatch<AppDispatch>();
    const providers = useSelector((state: RootState) => state.providers.providers);

    useEffect(() => {
        dispatch(fetchAllProviders());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Providers">
                <Dialog modal={true}>
                    <DialogTrigger asChild>
                        <Button variant="outline">New provider</Button>
                    </DialogTrigger>
                    <DialogContent
                        className="sm:max-w-[600px]"
                        onInteractOutside={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Provider</DialogTitle>
                            <DialogDescription>Create a new provider. Click save when you're done.</DialogDescription>
                        </DialogHeader>
                        <ProviderForm />
                    </DialogContent>
                </Dialog>
            </PageHeader>
            <ProviderDataTable data={providers} columns={providerColumns} />
        </div>
    );
};
