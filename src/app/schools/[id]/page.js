'use client'

import React from 'react'
import { usePathname } from "next/navigation";


function SchoolView() {
    const pathName = usePathname();
    const splitPath = pathName.split("/")
    const schoolId = splitPath[2]
  return (
    <div>SchoolView {schoolId}</div>
  )
}

export default SchoolView