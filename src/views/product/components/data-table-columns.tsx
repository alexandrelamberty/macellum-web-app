import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { categories, priorities, statuses } from "@/constants/product";
import { Product } from "@/store/schemas/product.schema";
import { DataTableRowActions } from "@/views/product/components/data-table-row-actions";

export const productColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "code",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Code" />,
    cell: ({ row }) => <div className="w-[80px]">{row.original.code}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    cell: ({ row }) => <div className="w-[120px]">{row.original.category}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => {
      const label = categories.find((label) => label.value === row.original.category);

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  //   {
  //     accessorKey: "price_evat",
  //     header: ({ column }) => <DataTableColumnHeader column={column} title="Price EVTA" />,
  //     cell: ({ row }) => <div className="w-[80px]">{row.getValue("price_evat")}</div>,
  //     enableSorting: true,
  //     enableHiding: true,
  //   },
  {
    accessorKey: "weight",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Packaging" />,
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.original.weight.quantity} <span>{row.original.weight.unit}</span>
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "stock.quantity",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
    cell: ({ row }) => <div className="w-[80px]">{row.original.stock.quantity}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "store.quantity",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Store" />,
    cell: ({ row }) => <div className="w-[80px]">{row.original.store.quantity}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue("status"));

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
    cell: ({ row }) => {
      const priority = priorities.find((priority) => priority.value === row.getValue("priority"));

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price.ivat",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => (
      <div className="w-[40px]">
        {row.original.price.ivat} {row.original.price.currency}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
