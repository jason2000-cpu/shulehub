import React from 'react'

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
    TableCaption, 
    TableRow,  
    TableFooter,
    TableHeader,
    TableHead
} from './ui/table'

import { Button } from "./ui/button";
import { DataTable } from './DataTable';
import Link from 'next/link';



const TableBdy = ({ data }) => {
    return (
        <TableBody>
        {data.map((row, index)=>{
        return (
            <tr key={index} className= "border transition-colors hover:bg-gray-200">
                <td className="py-4 align-middle">{row.name}</td>
                <td className="py-4 align-middle">{row.type}</td>
                <td className="py-4 align-middle">{row.county}</td>
                <td className="py-4 align-middle">{row.regDate}</td>
                <td className="py-4 align-middle">{row.product}</td>
                <td className="py-4 align-middle">{row.email}</td>
                <td className="py-4">
                <Link
                    href={`/schools/${row.id}`}
                    className="bg-[#004940] text-white py-1 px-3 rounded hover:bg-[#004940d7]"
                    >
                    View
                </Link>                
                </td>
            </tr>
        )
        })}
    </TableBody>
    )
}


function SchoolsTable({columns , data}) {
    // console.log(data, columns)
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel()
    });

  return (

    // <DataTable columns={columns} data={data} />

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
            <TableBdy data={ data } />
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
  )
}

export default SchoolsTable