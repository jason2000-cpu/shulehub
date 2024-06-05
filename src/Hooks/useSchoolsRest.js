'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { REQUEST_STATUS } from './useRequestRest';


import { University } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { School } from 'lucide-react';

// const baseUrl = "http://localhost:3001";

const baseUrl = "/api/external"



function useSchoolsRest(){
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [isLoading, setIsLoading] = useState(true);
    const [schools, setSchools] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function getSchools(){
            try {
                const result = await axios.get(`${baseUrl}/schools`);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setIsLoading(false);
                console.log(result.data);
                setSchools(result.data);
            } catch(err){
                setIsLoading(false);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(err);
            }
        }
        getSchools()
    },[])

    function getSchool(id){
      console.log(schools)
      const school = schools.find(school => school.id == id);
      // setIsLoading(false)
      console.log("SCHOOL GOTTEN:::", school)
      return school
    }


    return {
        requestStatus,
        schools,
        error,
        getSchool,
        isLoading
    }
}

export default useSchoolsRest;