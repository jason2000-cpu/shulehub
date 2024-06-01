'use client'

import React from 'react'
import { usePathname } from "next/navigation";
import PageTitle from '@/components/PageTitle';


function SchoolView() {
    const pathName = usePathname();
    const splitPath = pathName.split("/")
    const schoolId = splitPath[2]
  return (
    <div>
      <PageTitle title={schoolId} />
      <div></div>
    </div>
  )
}

export default SchoolView