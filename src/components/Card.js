'use client'

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import colors from "@/config/colors";
import Link from "next/link";



export default function Card({ data }) {
  const { name, amount, description, label, } = data;
  return (
    <Link href={`/${name}`} onClick={()=>{alert}} className={`flex w-full flex-col gap-3 rounded-xl border p-5 shadow hover:shadow-xl cursor-pointer`}>
            <section className="flex justify-between gap-2">
            <p className="text-sm">{label}</p>
            {/* <props.icon className="h-4 w-4 text-gray-400" /> */}
          </section>
          <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{amount}</h2>
            <p className="text-xs text-gray-500">{description}</p>
          </section>
    </Link>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
