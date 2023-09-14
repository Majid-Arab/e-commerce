import React from "react";
import Event1 from "/public/event1.webp";
import Event2 from "/public/event2.webp";
import Event3 from "/public/event3.webp";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function Featured() {
  return (
    <div>
      <Badge className="bg-transparent text-darkBlue">PROMOTIONS</Badge>
      <h1 className="text-3xl text-center font-bold -pr-40 my-6">
        Our Promotions Events
      </h1>
      <div className="flex justify-between">
        <div className=" w-1/2 h-1/2">
          {/* First Rectangle Box */}
          <div className="flex items-center justify-center bg-gray-200 mb-5">
            <div>
              <h2 className="text-3xl font-bold">GET UP TO 60%</h2>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image src={Event1} alt="event1" className="w-30" />
          </div>

          {/* Second Rectangle Box */}
          <div className="bg-black text-white text-center p-10">
            <h1 className="text-4xl font-bold">GET 30% Off</h1>
            <p className="pt-5 ">USE PROMO CODE</p>
            <Button className="text-lg tracking-widest bg-gray-800">
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>

        <div className="flex w-1/2">
          {/* First Mobile/Frame Box */}
          <div className="bg-orange-100	px-5 pt-5 ml-5">
            <h2>Flex Sweatshirt</h2>
            <p>
              <span>$100.00</span> $75.00
            </p>
            <Image src={Event2} alt="event2" className="w-30" />
          </div>

          {/* Second Mobile/Frame Box */}
          <div className="bg-gray-200 px-5 pt-5 ml-5 ">
            <h2>Flex Push Button Bombe</h2>
            <p>
              <span>$225.00</span> $190.00
            </p>
            <Image src={Event3} alt="event3" className="w-30 object-top" />
          </div>
        </div>
      </div>
    </div>
  );
}
