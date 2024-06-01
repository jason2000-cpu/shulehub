"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

import { University } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { School } from 'lucide-react';
import { Button } from "@/components/ui/button";
import InvoiceTable from "@/components/InvoiceTable";
import SchoolsTable from "@/components/SchoolsTable";

const columns = [
  {
    accessorKey: "name",
    header: "School Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
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

const data= [
  {
    id: 1,
    name: 'Jamuhuri High School',
    type: 'Secondary',
    product: 'Zeraki Finance',
    profile: University,
    email: "jamuhurischool@info.com",
    phone: '0797345092',
    balance: "10,999.00",
    regDate: "2023-01-01",
    county: "Eldoret"
  },
  {
    id: 2,
    name: 'Shadrack Kimalel Pri School',
    type: 'Primary',
    product: 'Zeraki Analytics',
    profile: BookOpenText,
    email: "shadrackkimalel@info.com",
    phone: '0712955064',
    balance: "21,300.00",
    regDate: "2023-02-15",
    county: "Kisumu"
  },
  {
    id: 3,
    name: 'Rose of Sharon School',
    type: 'IGCSE',
    product: 'Zeraki Timetable',
    profile: School,
    email: "rsa@info.com",
    phone: '0797955092',
    balance: "20, 000.00",
    regDate: "2023-03-20",
    county: "Mombasa"
  },
  {
    id: 4,
    name: 'Makini Schools',
    type: 'IGCSE',
    product: 'Zeraki Finance',
    profile: University,
    email: "makinischools@info.com",
    phone: '0797915867',
    balance: "00.00",
    regDate: "2023-04-10",
    county: "Nairobi"
  },
  {
    id: 5,
    name: 'Nairobi Primary',
    type: 'Primary',
    product: 'Zeraki Analytics',
    profile: BookOpenText,
    email: "nairobiprimary@info.com",
    phone: '0797955193',
    balance: "53, 000.00",
    regDate: "2023-05-05",
    county: "Nairobi"
  },
  {
    id: 6,
    name: "St Peter's Clavers",
    type: 'IGCSE',
    product: 'Zeraki Timetable',
    profile: School,
    email: "stpeterclavers@info.com",
    phone: '0797354967',
    balance: "42,500.00",
    regDate: "2023-06-18",
    county: "Nakuru"
  },
];

export default function UsersPage({}) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Schools" />
      {/* <DataTable columns={columns} data={data} /> */}
      {/* <InvoiceTable columns={columns} data={data}/> */}
      <SchoolsTable columns={columns} data={data} />
    </div>
  );
}
