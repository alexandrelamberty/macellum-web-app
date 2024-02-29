import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store";
import { fetchAllProviders } from "@/store/actions/provider.actions";
import { providerColumns } from "@/views/provider/components/data-table-columns";
import { ProviderDataTable } from "@/views/provider/components/provider-data-table";

export const Providers = () => {
    const dispatch = useDispatch<AppDispatch>();
    const providers = useSelector((state: RootState) => state.providers.providers);
    useEffect(() => {
        dispatch(fetchAllProviders());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Providers">
                <Button variant="outline">New provider</Button>
            </PageHeader>
            <ProviderDataTable data={providers} columns={providerColumns} />
        </div>
    );
};
