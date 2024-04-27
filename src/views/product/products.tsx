import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store";
import { fetchAllProducts } from "@/store/actions/product.actions";
import { productColumns } from "@/views/product/components/data-table-columns";
import { ProductDataTable } from "@/views/product/components/product-data-table";

export const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <PageHeader title="Products">
                <Button variant="outline">Restocking</Button>
                <Button variant="outline">Restocking</Button>
                <Button variant="outline">Delivery</Button>
                <Button variant="outline">New product</Button>
            </PageHeader>
            <ProductDataTable data={products} columns={productColumns} />
        </div>
    );
};
