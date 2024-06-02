'use client'

import React, { useState } from 'react';
import { DataTable } from './DataTable';
import { cn } from "@/lib/utils";
import InvoiceTable from './InvoiceTable';
import useInvoiceRest from '@/Hooks/useInvoicesRest';


const columns = [
    {
      accessorKey: "name",
      header: "School Name"
    },
    {
      accessorKey: "amountDue",
      header: "Amount Due",
    },
    {
      accessorKey: "dueDate",
      header: "Due Date"
    },
    {
      accessorKey: "none",
      header: "actions"
    }
  ];



const InvoicesCard = () => {
  const { invoices } = useInvoiceRest();
  return (
    <InvoiceTable data={invoices} columns={columns} />
     
  );
};

export default InvoicesCard;
