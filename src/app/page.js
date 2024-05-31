/** @format */

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

import { University } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { School } from 'lucide-react';


const cardData = [
  {
    label: "Total Revenue",
    amount: "$30,231.89",
    discription: "+10.1% from last month",
    icon: DollarSign
  },
  {
    label: "Signups",
    amount: "+29",
    discription: "+50.1% from last month",
    icon: Users
  },
  {
    label: "Bounced Cheques",
    amount: "+10",
    discription: "+5% from last month",
    icon: CreditCard
  },
  {
    label: "Collections",
    amount: "102",
    discription: "+5 since last hour",
    icon: Activity
  }
];


const schools = [
  {
    id: 1,
    name: 'Jamuhuri High School',
    type: 'Secondary',
    product: 'Zeraki Finance',
    profile: University,
    email: "jamuhurischool@info.com",
    saleAmount: "+Ksh 1,999.00"
  },
  {
    id: 2,
    name: 'Shadrack Kimalel Pri School',
    type: 'Primary',
    product: 'Zeraki Analytics',
    profile: BookOpenText,
    email: "shadrackkimalel@info.com",
    saleAmount: "+Ksh 1,999.00"
  },
  {
    id: 3,
    name: 'Rose of Sharon School',
    type: 'IGCSE',
    product: 'Zeraki Timetable',
    profile: School,
    email: "rsa@info.com",
    saleAmount: "+Ksh 39.00"
  },
  {
    id: 4,
    name: 'Makini Schools',
    type: 'IGCSE',
    product: 'Zeraki Finance',
    profile: University,
    email: "makinischools@info.com",
    saleAmount: "+Ksh 299.00"
  },
  {
    id: 5,
    name: 'Nairobi Primary',
    type: 'Primary',
    product: 'Zeraki Analytics',
    profile: BookOpenText,
    email: "nairobiprimary@info.com",
    saleAmount: "+Ksh 39.00"
  }

]

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
            
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {schools.map((data, index) => (
            <SalesCard key={index} data={data} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
