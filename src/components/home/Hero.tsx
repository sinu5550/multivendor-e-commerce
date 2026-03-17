"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
          {/* Hero Image */}
          <div className="relative w-full aspect-21/9 sm:aspect-25/9 lg:aspect-3/1">
            <Image
              src="/assets/hero-img.png"
              alt="Special Offer Hero"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Navigation Arrows (Optional visual indicators from the image) */}
          <button className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={24} />
          </button>
          <button className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-royal-blue shadow-sm border border-white/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-colors cursor-pointer shadow-sm border border-white/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-colors cursor-pointer shadow-sm border border-white/20"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
