'use client'

import React, { useState, useEffect } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { REQUEST_STATUS } from "./useRequestRest"


// const baseUrl = "http://localhost:3001"

const baseUrl = "/api/external"

function useInvoiceRest(){
    const [ requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING);
    const [ invoices, setInvoices ] = useState([]);
    const [ error, setError ]  = useState("");

    let originalInvoices = [...invoices]

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
    }, [invoices])

    function getInvoices(id){
        const schoolInvoices = invoices.filter(invoice => invoice.schoolId === id)

        return schoolInvoices
    }

    async function createInvoice(newInvoice){
        const invoice = {
            ...newInvoice,
            id: uuidv4(),
            invoiceNo: `INV-${Date.now()}`,
            balance: newInvoice.amount - newInvoice.amount_paid,
            daysUntilDue: (new Date(newInvoice.dueDate) - new Date(newInvoice.creationDate)) / (1000 * 60 * 60 * 24)
          };
        
        const newInvoices = [invoice, ...invoices]
        // console.log("NEW INVOICES ON CREATE:::", newInvoices)

        try {
            console.log("BEFORE ADDING::::", invoices.length)
            setInvoices(newInvoices)
            console.log("AFTER ADDING::::", invoices.length)
            await axios.post(`${baseUrl}/invoices`, invoice)
            .then(res => {
                console.log(res.stat)
        })
        } catch (err) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(`Error While Adding Invoice ${err}`);
            setInvoices(originalInvoices)
        }
    }

    async function updateInvoice(id, updatedInvoice){
        setInvoices(invoices.map(invoice => (invoice.id === id ? updatedInvoice : invoice)));

        // originalInvoices =[]
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