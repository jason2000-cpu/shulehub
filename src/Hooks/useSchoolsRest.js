'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { REQUEST_STATUS } from './useRequestRest';

const baseUrl = "http://localhost:3001";

function useSchoolsRest(){
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [schools, setSchools] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function getSchools(){
            try {
                const result = await axios.getSchools(`${baseUrl}/schools`);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                console.log(result.data);
                setSchools(result.data);
            } catch(err){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getSchools()
    },[])


    return {
        requestStatus,
        schools,
        error
    }
}

export default useSchoolsRest;