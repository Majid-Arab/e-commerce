import React from "react";
import Logo from "/public/Logo.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-10 px-20">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" className="w-30" />
      </Link>
      <ul className="flex gap-x-10 font-sora font-size-16">
        <li className="text-lg">
          <Link href="/category/female">Female</Link>
        </li>
        <li className="text-lg">
          <Link href="/category/male">Male</Link>
        </li>
        <li className="text-lg">
          <Link href="/category/kids">Kids</Link>
        </li>

        <li className="text-lg">
          <Link href="/products">All Products</Link>
        </li>
      </ul>

      {/* <input
        type="search"
        placeholder="What you looking for?"
        className="border-solid border-2 border-gray border-radius-20"
      /> */}

      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
        <ShoppingCart className="h-5 w-5" />
      </div>
    </div>
  );
}
