"use client";

import React from "react";
import { Truck, Clock, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="text-royal-blue" size={40} strokeWidth={1.5} />,
      title: "Fast, Free Shipping",
      description: "On order over BDT-2000",
    },
    {
      icon: <Clock className="text-royal-blue" size={40} strokeWidth={1.5} />,
      title: "Next Day Delivery",
      description: "Free - spend over BDT-20,000",
    },
    {
      icon: (
        <ShieldCheck className="text-royal-blue" size={40} strokeWidth={1.5} />
      ),
      title: "Quality Guarantee",
      description: "We guarantee our proucts",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 border-b border-gray-50">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center  gap-8 md:gap-0">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex w-full  items-center gap-5 px-4 lg:px-12 flex-1 md:justify-center ">
                <div className="shrink-0">{feature.icon}</div>
                <div className="flex flex-col">
                  <h3 className="font-urbanist font-bold text-base text-black/90 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="font-manrope text-[13px] text-gray-500 whitespace-nowrap">
                    {feature.description}
                  </p>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block w-[1.8px] h-10 bg-gray-200 self-center"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
