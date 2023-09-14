import React from "react";
import Logo from "/public/Logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex items-between py-10">
      <div>
        <Image src={Logo} alt="logo" className="w-30" />
        <p>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div>
          <button className="bg-gray-100">
            <InstagramIcon className="mr-2 h-4 w-4" />
          </button>
          <button className="bg-gray-100">
            <FacebookIcon className="mr-2 h-4 w-4" />
          </button>
          <button className="bg-gray-100">
            <TwitterIcon className="mr-2 h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-gray-500	font-bold text-xl">Company</h1>
        <a href="">About</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">How it works</a>
        <a href="">Contact Us</a>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-gray-500	font-bold text-xl">Support</h1>
        <a href="">Support</a>
        <a href="">24h Service</a>
        <a href="">Quick Chat</a>
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-gray-500 font-bold text-xl">Contact</h1>
        <a href="">Whatsapp</a>
        <a href="">Support 24h</a>
      </div>
    </div>
  );
}
