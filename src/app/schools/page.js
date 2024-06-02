"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";


import { Button } from "@/components/ui/button";
import InvoiceTable from "@/components/InvoiceTable";
import SchoolsTable from "@/components/SchoolsTable";
import useSchoolsRest from "@/Hooks/useSchoolsRest";

const columns = [
  {
    accessorKey: "name",
    header: "School Name",
  },
  {
    accessorKey: "type",
    header: "Type"
  },
  {
    accessorKey: "county",
    header: "County"
  },
  {
    accessorKey: "regDate",
    header: "Reg Date"
  },
  {
    accessorKey: "product",
    header: "Product"
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "action",
    header: "Action"
  }
];

export default function UsersPage({}) {
  const { schools } = useSchoolsRest()
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Schools" />
      <SchoolsTable columns={columns} data={schools} />
    </div>
  );
}
