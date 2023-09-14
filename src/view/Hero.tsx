import React from "react";
import bazar from "/public/featured1.png";
import bustle from "/public/featured2.png";
import versace from "/public/featured3.png";
import instyle from "/public/featured4.png";
import header from "/public/header.png";
import Image from "next/image";
import { ShoppingCart, Mail, ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="flex-col gap-y-10 sm:flex md:flex-row justify-between items-center">
      <div className="flex-1 flex-col align-around">
        <Badge className="py-2 w-32 rounded-lg bg-blue-100 text-darkBlue text-md font-semibold">
          Sale 70%
        </Badge>
        <h1 className="text-6xl font-bold -pr-40 my-6">
          An Industrial Take on Streetwear
        </h1>
        <p>
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="text-lg my-6 h-14">
          <ShoppingCartIcon className="mr-2 h-4 w-4" /> Start Shopping
        </Button>
        <div className="flex justify-between">
          <Image src={bazar} alt="logo" className="w-30" />
          <Image src={bustle} alt="logo" className="w-30" />
          <Image src={versace} alt="logo" className="w-30" />
          <Image src={instyle} alt="logo" className="w-30" />
        </div>
      </div>
      <div className="flex-1">
        <Image src={header} alt="logo" className="w-30" />
      </div>
    </section>
  );
}
