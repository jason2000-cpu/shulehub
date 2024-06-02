'use client'

import React, { useState, useEffect } from "react"
import axios from "axios"
import { REQUEST_STATUS } from "./useRequestRest"

const data = [
    { id: 1, name: 'Greenwood High', item: "Zeraki Finance", status: "pending", invoiceNo: "INV-121", created_at: '2024-06-02', amount_paid: 0, amountDue: 500, dueDate: '2024-06-15' },
    { id: 2, name: 'Lakeside Elementary',  item: "Zeraki Timetable", status: "pending", invoiceNo: "INV-122", created_at: '2024-06-02', amount_paid: 0, amountDue: 300, dueDate: '2024-06-10' },
    { id: 3, name: 'Hillside School',  item: "Zeraki Analytics", status: "pending", invoiceNo: "INV-123", created_at: '2024-06-02', amount_paid: 0, amountDue: 450, dueDate: '2024-06-20' }
  ];

function useInvoiceRest(){
    const [ requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING);
    const [ invoices, setInvoices ] = useState([]);
    const [ error, setError ]  = useState("");

    useEffect(()=>{
        async function getInvoices(){
            try {
                // const result = await axios.get(`${baseUrl}/invoices`);
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                // console.log(result.data);
                setInvoices( data);
                console.log(invoices)
            } catch(err){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getInvoices()
    }, [])

    function getInvoices(){
        const invoices = invoices.filter(invoice => invoice.schoolId === id)

        return invoices
    }


    return {
        requestStatus,
        invoices,
        error,
        setInvoices,
        getInvoices
    }
}

export default useInvoiceRest;