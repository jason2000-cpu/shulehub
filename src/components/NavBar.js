import React from 'react'
import PageTitle from './PageTitle'


import { UserRound } from 'lucide-react';

function NavBar() {
  return (
    <div className='px-8 border shadow-lg flex justify-between h-10'>
     <PageTitle/>
     <span className='p-2 border rounded-full bg-gray-300 flex justify-center items-center '><UserRound /></span>
    </div>
  )
}

export default NavBar