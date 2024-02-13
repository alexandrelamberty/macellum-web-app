import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { fetchAllCustomer } from "@/store/actions/customer.actions";
import { AppDispatch, RootState } from "@/store/store";
import { CustomerDataTable } from "@/views/customer/components/customer-data-table";
import { customerColumns } from "@/views/customer/components/data-table-columns";

export function Customers() {
  const dispatch = useDispatch<AppDispatch>();
  const customers = useSelector(
    (state: RootState) => state.customers.customers,
  );

  useEffect(() => {
    dispatch(fetchAllCustomer());
  }, [dispatch]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <PageHeader title="Customers">
        <Button variant="outline">New customer</Button>
      </PageHeader>
      <CustomerDataTable data={customers} columns={customerColumns} />
    </div>
  );
}
