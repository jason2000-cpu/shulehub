'use client'

import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import PieChart from "@/components/PieChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

import InvoicesCard from "@/components/InvoicesCard";


const cardData = [
  {
    label: "Total Revenue",
    amount: "$30,231.89",
    description: "+10.1% from last month",
    icon: DollarSign,
    name: 'revenue'
  },
  {
    label: "Signups",
    amount: "+29",
    description: "+50.1% from last month",
    icon: Users,
    name: 'signups'
  },
  {
    label: "Bounced Cheques",
    amount: "+10",
    description: "+5% from last month",
    icon: CreditCard,
    name: 'cheques'
  },
  {
    label: "Collections",
    amount: "102",
    description: "+5 since last hour",
    icon: Activity,
    name: 'collections'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <PieChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="text-xl font-semibold">Upcoming Invoices</p>
            <p className="text-sm text-gray-400">
              You made 20 new signups this month.
            </p>
          </section>
            <InvoicesCard />            
        </CardContent>
      </section>
    </div>
  );
}
