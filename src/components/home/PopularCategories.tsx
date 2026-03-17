"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Firefighting Accessories",
    image: "/assets/Firefighting-Accessories.svg",
  },
  {
    name: "Fire Extinguisher",
    image: "/assets/Fire-Extinguisher.svg",
  },
  {
    name: "Fire Ventilator",
    image: "/assets/Fire-Ventilator.svg",
  },
  {
    name: "Fire Detection",
    image: "/assets/Fire-Detection.svg",
  },
  {
    name: "Fire Door",
    image: "/assets/Fire-Door.svg",
  },
  {
    name: "Evaporative Cooler",
    image: "/assets/Evaporative-Cooler.svg",
  },
  {
    name: "Firefighting Accessories",
    image: "/assets/Firefighting-Accessories.svg",
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-urbanist font-bold text-3xl md:text-5xl text-black tracking-tight mb-3">
            Popular Categories
          </h2>
          <p className="font-manrope text-sm md:text-base text-gray-400">
            Explore What people likes more.
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="relative mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
                >
                  <div className="flex flex-col items-center group cursor-pointer">
                    {/* Circle Image Wrapper */}
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 flex items-center justify-center overflow-hidden transition-all duration-300">
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                    {/* Label */}
                    <h3 className="font-manrope font-bold text-[15px] sm:text-base text-gray-800 text-center leading-tight max-w-[140px] ">
                      {category.name}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious className="absolute -left-12 top-2/5 -translate-y-1/2 w-10 h-10 border border-gray-200 bg-white text-black hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all" />
            <CarouselNext className="absolute -right-12 top-2/5 -translate-y-1/2 w-10 h-10 border border-gray-200 bg-white text-black hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all" />
          </Carousel>

          {/* Pagination Dots (Visual placeholder to match design) */}
          <div className="flex justify-center gap-2 mt-12 md:mt-16">
            <span className="w-2.5 h-2.5 rounded-full bg-royal-blue"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
