'use client'

import React, { useState, useEffect, act } from 'react';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import PageTitle from '@/components/PageTitle';
import InvoiceTable from '@/components/InvoiceTable';
import useInvoiceRest from '@/Hooks/useInvoicesRest';
import { SchoolInvoiceTable } from '@/components/SchoolInvoiceTable';
import NewInvoiceModal from '@/components/NewInvoiceModal';
import AddCollectionModal from '@/components/AddCollectionModal';
import useSchoolsRest from '@/Hooks/useSchoolsRest';
import { REQUEST_STATUS } from '@/Hooks/useRequestRest';


const columns = [
  {
    accessorKey: "invoiceNo",
    header: "Invoice No"
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "created_at",
    header: "Creation Date"
  },
  {
    accessorKey: "date_due",
    header: "Due Date"
  },
  {
    accessorKey: "amountDue",
    header: "Amount"
  },
  {
    accessorKey: "amount_paid",
    header: "Paid Amount"
  },
  {
    accessorKey: "balance",
    header: "balance"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    header: "Days Till Due"
  },
  {
    header: "Action"
  }
];
const SchoolView = () => {
  const pathName = usePathname()
  const { invoices, setInvoices, updateInvoice } = useInvoiceRest();
  const { getSchool, requestStatus, error, isLoading } = useSchoolsRest()

  const id = pathName.split("/")[2]
  const school = getSchool(id)[0];

  console.log("SCHOOL IN VIEW:::", school)

  const [filter, setFilter] = useState('all');
  const [invoiceModelIsOpen, setInvoiceModalIsOpen] = useState(false);
  const [collectioniModelIsOpen, setCollectionModelIsOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    item: 'Zeraki Analytics',
    created_at: '',
    dueDate: '',
    amountDue: 0,
    amount_paid: 0,
    status: 'pending'
  });
  const [newCollection, setNewCollection] = useState({
    invoiceId: '',
    amountDue: 0,
    status: 'partial'
  });


  const handleOpenModal = (modal) => {
    if (modal === 'createInvoice'){
      setCollectionModelIsOpen(false);
      setInvoiceModalIsOpen(true)
    } else if (modal === 'addCollection') {
      setInvoiceModalIsOpen(false);
      setCollectionModelIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setInvoiceModalIsOpen(false);
    setCollectionModelIsOpen(false)
  };

  const handleCreateInvoice = () => {
    handleCloseModal()
    const invoice = {
      ...newInvoice,
      id: uuidv4(),
      invoiceNo: `INV-${Date.now()}`,
      balance: newInvoice.amount - newInvoice.amount_paid,
      daysUntilDue: (new Date(newInvoice.dueDate) - new Date(newInvoice.creationDate)) / (1000 * 60 * 60 * 24)
    };
    setInvoices([...invoices, invoice]);
    setNewInvoice({
      item: 'Zeraki Analytics',
      created_at: '',
      dueDate: '',
      amountDue: 0,
      amount_paid: 0,
      status: 'pending'
    });
  };


  const handleAddCollection = () => {
    handleCloseModal()
    const invoice = invoices.find(inv => newCollection.invoiceId == inv.id)
  
    if (invoice) {
      const updatedPaidAmount = invoice.amount_paid + parseFloat(newCollection.amountDue);
      const updatedInvoice = {
        ...invoice,
        amount_paid: updatedPaidAmount,
        balance: invoice.amount_paid - updatedPaidAmount,
        status: updatedPaidAmount >= invoice.amountDue ? 'completed' : 'pending'
      };
      updateInvoice(invoice.id, updatedInvoice);
    }
    setNewCollection({ invoiceId: '', amountDue: 0, status: 'partial' });
  };

  const filteredInvoices = invoices.filter(invoice => filter === 'all' || invoice.status === filter);


  return (
    {requestStatus == REQUEST_STATUS.SUCCESS ? (
      <div className="px-6">
            <div className='mb-4'>
            <PageTitle title={`${school.name}`} />
            </div>
            <div className='flex justify-between'>
              <PageTitle title={'Invoices'} />
              <div className='space-x-10'>
                  <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={()=>handleOpenModal('createInvoice')}
                  >
                    Create Invoice
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={()=> handleOpenModal('addCollection')}
                  >
                    Add Collection
                  </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="mr-2">Filter:</label>
              <select
                className="border p-2 rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <SchoolInvoiceTable data={filteredInvoices} columns={columns} />
            { 
              invoiceModelIsOpen ? 
                  <NewInvoiceModal 
                      newInvoice={newInvoice} 
                      setNewInvoice={setNewInvoice} 
                      handleCloseModal={handleCloseModal} 
                      invoiceModelIsOpen={invoiceModelIsOpen} 
                      handleCreateInvoice={handleCreateInvoice}/> 
                : null
            }

            {
              collectioniModelIsOpen ? <AddCollectionModal
                setCollectionModelIsOpen={setCollectionModelIsOpen}
                handleCloseModal={handleCloseModal}
                collectioniModelIsOpen={collectioniModelIsOpen}
                handleAddCollection={handleAddCollection}
                newCollection={newCollection}
                setNewCollection={setNewCollection}
                invoices={invoices}
                /> : null
            }

          </div>
    ) : 
    <div>LOADING!!!</div>
  
  }
  );
};

export default SchoolView;
