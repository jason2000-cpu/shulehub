'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {v4 as uuidv4} from 'uuid'


// const baseUrl = "https:localhost:3001";

const baseUrl = "https://shulehub-api-5yj9.vercel.app/"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

function useRequestRest(){
    const [ users, setUsers ] = useState([]);
    const[requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("")

    useEffect(()=>{
        async function getUsers(){
            try {
                const result = await axios.get(`${baseurl}/users`)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                console.log(result.data);
                setUsers(result.data);
            } catch(err){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getUsers()
    }, [])


    return {
        users,
        requestStatus,
        error
    }
}

export default useRequestRest;