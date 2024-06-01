'use client'

import React, { useState } from 'react';
import { DataTable } from './DataTable';
import { cn } from "@/lib/utils";
import InvoiceTable from './InvoiceTable';


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

  const data = [
    { id: 1, name: 'Greenwood High', amountDue: 500, dueDate: '2024-06-15' },
    { id: 2, name: 'Lakeside Elementary', amountDue: 300, dueDate: '2024-06-10' },
    { id: 3, name: 'Hillside School', amountDue: 450, dueDate: '2024-06-20' },
  ];

const InvoicesCard = () => {

  return (
    <InvoiceTable data={data} columns={columns} />
     
  );
};

export default InvoicesCard;
