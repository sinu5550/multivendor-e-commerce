"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Phone,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Part 1: Top Bar */}
      <div className="bg-royal-blue text-white py-2 font-manrope text-sm border-b border-white/10 text-center sm:text-left">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-medium">
            Welcome to BD Stall! Your Online Market for Fire Equipment
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/contact" className="hover:underline flex items-center">
              Contact Us
            </Link>
            <div className="hidden sm:block w-px h-4 bg-white/30 self-center"></div>
            <Link
              href="/become-seller"
              className="hover:underline flex items-center"
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </div>

      {/* Part 2: Middle Bar */}
      <div className="bg-white py-4 sm:py-5 font-urbanist text-black">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="BD PLAZA Logo"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="w-full lg:flex-1 max-w-2xl relative 2xl:-ml-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full bg-soft-lavender/50 border-none rounded-full py-2.5 sm:py-3.5 pl-9 pr-12 text-sm focus:ring-2 focus:ring-royal-blue/20 transition-all outline-none "
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-black transition-colors">
                <Search size={14} />
              </button>
            </div>
          </div>

          {/* Action Items */}
          <div className="flex items-center gap-7">
            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="text-black">
                <Phone size={26} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-medium">
                  Contact us 24/7
                </span>
                <span className="text-sm font-bold">(02)-55048474</span>
              </div>
            </div>

            {/* Account */}
            <Link
              href="/account"
              className="flex items-center gap-2 hover:text-royal-blue transition-colors group"
            >
              <User size={24} strokeWidth={1.5} />
              <span className="text-sm font-semibold">Your Account</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="flex items-center gap-2 hover:text-royal-blue transition-colors group"
            >
              <div className="relative">
                <Heart size={24} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-azure-blue text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-sm font-semibold">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 hover:text-royal-blue transition-colors group"
            >
              <div className="relative">
                <ShoppingBag size={24} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-azure-blue text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>
              <span className="text-sm font-semibold">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Part 3: Bottom Bar */}
      <div className="bg-royal-blue/10 border-b border-gray-100 font-manrope">
        <div className="container mx-auto px-4 flex items-center">
          {/* Categories Button */}
          <button className="bg-royal-blue text-white flex items-center gap-3 px-4 py-2 font-bold hover:bg-[#0037A5] transition-colors rounded-sm group">
            <svg
              width="16"
              height="12"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5"
            >
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="12" width="12" height="2" rx="1" fill="currentColor" />
            </svg>
            <span className="text-sm">All Categories</span>
            <ChevronDown
              size={16}
              className="ml-2 group-hover:-rotate-180 transition-transform duration-500"
            />
          </button>

          {/* Main Navigation */}
          <nav className="flex items-center ml-10">
            {[
              "Firefighting Accessories",
              "Fire Extinguisher",
              "Ventilation",
              "Fire Detection",
              "Firefighting System",
              "Fire Protection",
            ].map((item) => (
              <Link
                key={item}
                href={`/category/${item.toLowerCase().replace(/ /g, "-")}`}
                className="px-5 py-4 text-[13.5px] font-bold text-black/80 hover:text-royal-blue transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
