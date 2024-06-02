'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { REQUEST_STATUS } from './useRequestRest';


import { University } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { School } from 'lucide-react';

const baseUrl = "http://localhost:3001";


const data= [
    {
      id: 1,
      name: 'Jamuhuri High School',
      type: 'Secondary',
      product: 'Zeraki Finance',
      profile: University,
      email: "jamuhurischool@info.com",
      phone: '0797345092',
      balance: "10,999.00",
      regDate: "2023-01-01",
      county: "Eldoret"
    },
    {
      id: 2,
      name: 'Shadrack Kimalel Pri School',
      type: 'Primary',
      product: 'Zeraki Analytics',
      profile: BookOpenText,
      email: "shadrackkimalel@info.com",
      phone: '0712955064',
      balance: "21,300.00",
      regDate: "2023-02-15",
      county: "Kisumu"
    },
    {
      id: 3,
      name: 'Rose of Sharon School',
      type: 'IGCSE',
      product: 'Zeraki Timetable',
      profile: School,
      email: "rsa@info.com",
      phone: '0797955092',
      balance: "20, 000.00",
      regDate: "2023-03-20",
      county: "Mombasa"
    },
    {
      id: 4,
      name: 'Makini Schools',
      type: 'IGCSE',
      product: 'Zeraki Finance',
      profile: University,
      email: "makinischools@info.com",
      phone: '0797915867',
      balance: "00.00",
      regDate: "2023-04-10",
      county: "Nairobi"
    },
    {
      id: 5,
      name: 'Nairobi Primary',
      type: 'Primary',
      product: 'Zeraki Analytics',
      profile: BookOpenText,
      email: "nairobiprimary@info.com",
      phone: '0797955193',
      balance: "53, 000.00",
      regDate: "2023-05-05",
      county: "Nairobi"
    },
    {
      id: 6,
      name: "St Peter's Clavers",
      type: 'IGCSE',
      product: 'Zeraki Timetable',
      profile: School,
      email: "stpeterclavers@info.com",
      phone: '0797354967',
      balance: "42,500.00",
      regDate: "2023-06-18",
      county: "Nakuru"
    },
  ];



function useSchoolsRest(){
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [schools, setSchools] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function getSchools(){
            try {
                // const result = await axios.getSchools(`${baseUrl}/schools`);
                // setRequestStatus(REQUEST_STATUS.SUCCESS);
                // console.log(result.data);
                setSchools(data);
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