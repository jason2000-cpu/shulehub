"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "./ui/button";
import useInvoiceRest from "@/Hooks/useInvoicesRest";



export function SchoolInvoiceTable({ columns, data }) {
  const { invoices, deleteInvoice } = useInvoiceRest();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* <TableBody /> */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
  
                data.map((invoice, index)=>{
                    const balance = invoice.amountDue - invoice.amount_paid;
                    const  daysUntilDue =  (new Date(invoice.dueDate) - new Date(invoice.created_at)) / (1000 * 60 * 60 * 24)
                    return (
                        <tr key={index} className= "border transition-colors hover:bg-gray-200">
                            <td className="py-4 px-5">{invoice.invoiceNo}</td>
                            <td className="py-4 px-5">{invoice.item}</td>
                            <td className="py-4 px-5">{invoice.created_at}</td>
                            <td className="py-4 px-5">{invoice.dueDate}</td>
                            <td className="py-4 px-5">{invoice.amountDue}</td>
                            <td className="py-4 px-5">{invoice.amount_paid}</td>
                            <td className="py-4 px-5">{balance}</td>
                            <td className="py-4 px-5">{invoice.status}</td>
                            <td className="py-4 px-5">{daysUntilDue}</td>
                            
                            <td className="py-2 px-4 border">
                                <button className="bg-[#490b00] text-white py-1 px-3 rounded hover:bg-[#004940d7]" onClick={() => deleteInvoice(invoice.id)}>Delete</button>
                            
                            </td>
                        </tr>
                )
                })

            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
