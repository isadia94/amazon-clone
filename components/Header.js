import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const router = useRouter();

  return (
    <header>
      {/* Top Nav */}

      <div className="flex items-center p-1 bg-amazon_blue py-2">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Search */}

        <div className="h-10 items-center hidden sm:flex bg-yellow-400 rounded-md flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md outline-none"
            type="text"
            onClick={() => router.push("/products")}
          />
          <MagnifyingGlassIcon className="h-12 text-black p-4 cursor-pointer" />
        </div>

        <div className="flex items-center text-white text-xs space-x-4 md:space-x-6 mx-6 whitespace-nowrap">
          <div className="link hidden sm:block">
            <p>Hello, Brian Lusigi</p>
            <p className="text-sm font-bold">Accounts & Lists</p>
          </div>
          <div className="link hidden sm:block">
            <p>Accounts</p>
            <p className="text-sm font-bold">& Orders</p>
          </div>
          <div className="flex items-center -mr-6 md:hidden">
            <p>Sign In &gt;</p>
            <UserIcon className="h-6" />
          </div>

          <div className="link relative flex items-center">
            <span className="absolute  right-0 top-0 md:right-5 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-8 sm:h-10" />
            <p className="hidden md:inline font-bold mt-4">Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}

      <div className="bg-amazon_blue sm:bg-amazon_blue-light  pb-4">
        <div className="h-10 items-center flex bg-yellow-400 rounded-md flex-grow mx-6 sm:hidden">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md outline-none  sm:hidden bg-white "
            type="text"
            onChange={() => router.push("/products")}
          />
          <MagnifyingGlassIcon className="h-12 text-black p-4 cursor-pointer" />
        </div>
        <div className="text-white mx-6 pt-4 flex space-x-2 sm:space-x-4 text-xs md:text-sm items-center overflow-x-scroll no-scrollbar  ">
          <p className="flex link items-center min-w-[50px] ">
            <Bars3Icon className="h-6" />
            All
          </p>
          <p className="min-w-[90px] link">Today's Deals</p>
          <p className="min-w-[120px] link">Customer Service</p>
          <p className="min-w-[70px] link">Registry</p>
          <p className="min-w-[80px] link">Gift Cards</p>
          <p>Sell</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
