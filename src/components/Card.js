/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import colors from "@/config/colors";



export default function Card(props) {
  return (
    <div className={`flex w-full flex-col gap-3 rounded-xl border p-5 shadow hover:shadow-xl`}>
            <section className="flex justify-between gap-2">
            {/* label */}
            <p className="text-sm">{props.label}</p>
            {/* icon */}
            <props.icon className="h-4 w-4 text-gray-400" />
          </section>
          <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{props.amount}</h2>
            <p className="text-xs text-gray-500">{props.discription}</p>
          </section>
    </div>
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
