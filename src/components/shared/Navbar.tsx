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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navLinks = [
    "Firefighting Accessories",
    "Fire Extinguisher",
    "Ventilation",
    "Fire Detection",
    "Firefighting System",
    "Fire Protection",
  ];

  return (
    <header className="w-full">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        {/* Part 1: Top Bar */}
        <div className="bg-royal-blue text-white py-2 font-manrope text-sm border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-between items-center gap-2">
            <p className="font-medium">
              Welcome to BD Stall! Your Online Market for Fire Equipment
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="hover:underline flex items-center"
              >
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
        <div className="bg-white py-5 font-urbanist text-black border-b border-gray-100">
          <div className="container mx-auto px-4 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="BD PLAZA Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl relative 2xl:-ml-8">
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
                  <span className="text-[10px] text-gray-500 font-medium whitespace-nowrap">
                    Contact us 24/7
                  </span>
                  <span className="text-sm font-bold whitespace-nowrap">
                    (02)-55048474
                  </span>
                </div>
              </div>

              {/* Account */}
              <Link
                href="/account"
                className="flex items-center gap-2 hover:text-royal-blue transition-colors group"
              >
                <User size={24} strokeWidth={1.5} />
                <span className="text-sm font-semibold whitespace-nowrap">
                  Your Account
                </span>
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
            <button className="bg-royal-blue text-white flex items-center gap-3 px-4 py-2 font-bold hover:bg-[#0037A5] transition-colors rounded-sm group my-2">
              <svg
                width="16"
                height="12"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              {navLinks.map((item) => (
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
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="lg:hidden">
        {/* Mobile Top Bar */}
        <div className="bg-white text-white p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="BD PLAZA Logo"
                width={130}
                height={40}
                className="h-8 w-auto "
                priority
              />
            </Link>

            <div className="flex items-center gap-4">
              {/* User Icon */}
              <Link href="/account" className="text-black">
                <User size={24} strokeWidth={1.5} />
              </Link>

              {/* Cart Icon */}
              <Link href="/cart" className="relative text-black">
                <ShoppingBag size={24} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 bg-royal-blue text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold border border-royal-blue">
                  0
                </span>
              </Link>

              {/* Sidebar Trigger (Menu) */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="text-black hover:text-black/80 transition-colors outline-none">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="2" rx="1" fill="currentColor" />
                      <rect
                        y="7"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <rect
                        y="14"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] p-0 font-urbanist"
                  showCloseButton={false}
                >
                  <SheetHeader className="px-4 pb-2 border-b">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Search for products"
                        className="w-full  border-none x-4 pr-10 text-xl outline-none focus:none"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70">
                        <Search size={20} />
                      </button>
                    </div>
                  </SheetHeader>
                  <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100vh-80px)] font-manrope">
                    <div className="border-b border-gray-50">
                      <Link
                        href="#"
                        className="flex items-center justify-between px-6 py-4 text-[15px] font-bold bg-royal-blue text-white"
                      >
                        <span className="flex items-center gap-3">
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
                            <rect y="12" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                          All Categories
                        </span>
                        <ChevronDown size={14} className="text-white/70" />
                      </Link>
                    </div>
                    {navLinks.map((item) => (
                      <div
                        key={item}
                        className="border-b last:border-none border-gray-50"
                      >
                        <Link
                          href={`/category/${item.toLowerCase().replace(/ /g, "-")}`}
                          className="flex items-center justify-between px-6 py-4 text-[15px] font-medium transition-colors hover:bg-royal-blue/5 text-black"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar  */}
        <div className="bg-royal-blue/10 p-3 ">
          <div className="container mx-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-white border-none rounded-full py-2.5 pl-10 pr-4 text-sm outline-none font-manrope"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
