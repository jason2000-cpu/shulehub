'use client'

import { useState } from 'react'
import useInvoiceRest from '@/Hooks/useInvoicesRest';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';


const NewInvoiceModal = ({invoiceModelIsOpen, handleCloseModal, handleCreateInvoice }) => {
    const [newInvoice, setNewInvoice] = useState({
        item: 'Zeraki Analytics',
        created_at: '',
        dueDate: '',
        amountDue: 0,
        amount_paid: 0,
        status: 'pending'
      });
    const { createInvoice } = useInvoiceRest();
    return (
        <Dialog open={invoiceModelIsOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-md">
              <Dialog.Title className="text-lg font-bold">
                <div className='flex justify-between items-center'>
                    <span>Create New Invoice</span>
                    <span
                        className="cursor-pointer"
                        onClick={handleCloseModal}
                    >
                         <X />
                    </span>
                </div>
              </Dialog.Title>
              <Dialog.Description>
                <div className="mt-4">
                  <p><strong>School Name:</strong>{'Shadrack Kimalel Pri School'}</p>
                </div>
              </Dialog.Description>
              <div className="mt-4">
                <div className="mb-4">
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                  <select
                    value={newInvoice.item}
                    onChange={(e) => setNewInvoice({...newInvoice, invoiceItem: e.target.value})}
                    id="productName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="Zeraki Analytics">Zeraki Analytics</option>
                    <option value="Zeraki Finance">Zeraki Finance</option>
                    <option value="Zeraki Timetable">Zeraki Timetable</option>
                  </select>
                    <div className='flex justify-between mt-4'>
                        <div>
                                <label htmlFor='invoiceDate'  className="block text-sm font-medium text-gray-700 mb-1">Invoice Date</label>
                                <input
                                className="border p-2 rounded  w-[12rem]"
                                type="date"
                                placeholder="Creation Date"
                                value={newInvoice.creationDate}
                                onChange={(e) => setNewInvoice({ ...newInvoice, created_at: e.target.value })}
                                />
                            </div>
                            <div>
                                <lable htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Date Due</lable>
                                <input
                                className="border p-2 rounded w-[12rem]"
                                type="date"
                                placeholder="Due Date"
                                value={newInvoice.dueDate}
                                onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
                                />
                            </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <input
                                className="border p-2 rounded"
                                type="number"
                                placeholder="Amount"
                                value={newInvoice.amount}
                                onChange={(e) => setNewInvoice({ ...newInvoice, amountDue: parseFloat(e.target.value) })}
                            />
                            <input
                                className="border p-2 rounded"
                                type="number"
                                placeholder="Paid Amount"
                                value={newInvoice.paidAmount}
                                onChange={(e) => setNewInvoice({ ...newInvoice, amount_paid: parseFloat(e.target.value) })}
                            />
                    </div>
                    <select
                        className="border p-2 rounded mt-4"
                        value={newInvoice.completionStatus}
                        onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="bg-[#004940] text-white py-2 px-4 rounded hover:bg-[#004940d7] w-full"
                    onClick={()=> createInvoice(newInvoice)}
                    >
                  create Invoice
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      
    )
  }


  export default NewInvoiceModal;