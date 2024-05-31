import React from "react";

export default function SalesCard({ data }) {
  const {name, email, saleAmount } = data;
  return (
    <div className="  flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3 ">
        <div className=" h-12 w-12 rounded-full bg-gray-100 p-1">
          <data.profile className='w-full h-full' />

        </div>
        <div className="text-sm">
            <p>{name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400">
                {email}
            </div>
        </div>
      </section>
        <p>{saleAmount}</p>
    </div>
  );
}
