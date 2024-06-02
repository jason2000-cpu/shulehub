'use client'

import React, { useState } from 'react'
import InvoiceModal from './InvoiceModal';


function TableRow({ invoice, handleOpenModal }){
  return (
    <tr key={invoice.id}>
      <td className="py-2 px-4 border-b h-20 text-center">{invoice.schoolName}</td>
      <td className="py-2 px-4 border-b h-20 text-center">Ksh. {invoice.amountDue}</td>
      <td className="py-2 px-4 border-b h-20 text-center">{new Date(invoice.dueDate).toLocaleDateString()}</td>
      <td className="py-2 px-4 border-b h-20 text-center">
        <button
          className="bg-[#004940] text-white py-1 px-3 rounded hover:bg-[#004940d7]"
          onClick={() => handleOpenModal(invoice)}
        >
          Collect
        </button>
      </td>
    </tr>
  )
}

export function TableHead({ header }){
  return (
    <th>{header}</th>
  )
}



function InvoiceTable({ data, columns }) {

const [isOpen, setIsOpen] = useState(false);
const [selectedInvoice, setSelectedInvoice] = useState(null);

const sortedInvoices = data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

const handleOpenModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsOpen(true);
};

const handleCloseModal = () => {
    setSelectedInvoice(null);
    setIsOpen(false);
};

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="min-w-ful w-full border rounded">
          <thead>
            <tr className='text-center'>
              {columns.map((col, index)=> <TableHead header={col.header} /> )}
            </tr>
          </thead>
          <tbody>
            {sortedInvoices.map((invoice) => <TableRow invoice={invoice} handleOpenModal={handleOpenModal} />)}
          </tbody>
        </table>
      </div>

      {selectedInvoice && <InvoiceModal selectedInvoice={selectedInvoice} isOpen={isOpen} handleCloseModal={handleCloseModal} />}
    </div>
  )
}

export default InvoiceTable