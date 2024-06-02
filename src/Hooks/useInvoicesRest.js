'use client'

import React, { useState, useEffect } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { REQUEST_STATUS } from "./useRequestRest"


const baseUrl = "http://localhost:3000"
function useInvoiceRest(){
    const [ requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING);
    const [ invoices, setInvoices ] = useState([]);
    const [ error, setError ]  = useState("");
    const [newInvoice, setNewInvoice] = useState({
        item: 'Zeraki Analytics',
        created_at: '',
        dueDate: '',
        amountDue: 0,
        amount_paid: 0,
        status: 'pending'
      });

    useEffect(()=>{
        async function getInvoices(){
            try {
                const result = await axios.get(`${baseUrl}/invoices`);
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                console.log(result.data);
                setInvoices(result.data);
                console.log(invoices)
            } catch(err){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getInvoices()
    }, [invoices.length])

    function getInvoices(id){
        const invoices = invoices.filter(invoice => invoice.schoolId === id)

        return invoices
    }

    async function createInvoice(newInvoice){
        const invoice = {
            ...newInvoice,
            id: uuidv4(),
            invoiceNo: `INV-${Date.now()}`,
            balance: newInvoice.amount - newInvoice.amount_paid,
            daysUntilDue: (new Date(newInvoice.dueDate) - new Date(newInvoice.creationDate)) / (1000 * 60 * 60 * 24)
          };

          try {
            await axios.post(`${baseUrl}/invoices`, invoice)
            .then(res => {
              console.log(res.stat)
            })
          } catch (err) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(`Error While Adding Invoice ${err}`);
          }
    }

    async function updateInvoice(id, updatedInvoice){
        setInvoices(invoices.map(invoice => (invoice.id === id ? updatedInvoice : invoice)));

        try {
            await axios.patch(`${baseUrl}/invoices/${id}`, updatedInvoice)
            .then(res =>{
                console.log(res.status)
            })
            
        } catch(err){
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(`Error While Updating Invoice ${err}`);
        }

    }

    async function deleteInvoice(id){
        setInvoices(invoices.filter(invoice => invoice.id !== id));
        
        try {
            await axios.delete(`${baseUrl}/invoices/${id}`)
            .then(res =>{
                console.log(res.status)
            })
        } catch (err) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(`Error While Deleting Invoice ${err}`)
        }
    }
    return {
        requestStatus,
        invoices,
        error,
        setInvoices,
        getInvoices,
        createInvoice,
        updateInvoice,
        deleteInvoice
    }
}

export default useInvoiceRest;