'use client'

import React, { useState } from 'react'
import InvoiceModal from './InvoiceModal';


function TableRow({ invoice, handleOpenModal }){
  return (
    <tr key={invoice.id}>
      <td className="py-2 px-4 border-b">{invoice.name}</td>
      <td className="py-2 px-4 border-b">Ksh. {invoice.amountDue}</td>
      <td className="py-2 px-4 border-b">{new Date(invoice.dueDate).toLocaleDateString()}</td>
      <td className="py-2 px-4 border-b">
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



function InvoiceTable({ data }) {

const [isOpen, setIsOpen] = useState(false);
const [selectedInvoice, setSelectedInvoice] = useState(null);

// Sort invoices by due date
const sortedInvoices = data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

// Handle opening the modal
const handleOpenModal = (invoice) => {
    setSelectedInvoice(invoice);
    setIsOpen(true);
};

// Handle closing the modal
const handleCloseModal = () => {
    setSelectedInvoice(null);
    setIsOpen(false);
};

  return (
    <div className="container">
      <div className="overflow-x-auto">
        <table className="min-w-ful w-full border rounded">
          <thead className="">
            <tr>
              <th className="py-2 px-4 border-b">School Name</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Due Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
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