'use client'

import React, { useState, useEffect } from "react"
import axios from "axios"
import { REQUEST_STATUS } from "./useRequestRest"


function useInvoiceRest(){
    const [ requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING);
    const [ invoices, setInvoices ] = useState([]);
    const [ error, setError ]  = useState("");

    useEffect(()=>{
        async function getInvoices(){
            try {
                const result = await axios.get(`${baseUrl}/invoices`);
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                console.log(result.data);
                setInvoices(result.data);
            } catch(err){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getInvoices()
    }, [])




    return {
        requestStatus,
        invoices,
        error
    }
}

export default useInvoiceRest;