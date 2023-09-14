import React from "react";
import Event1 from "/public/event1.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProductSample() {
  return (
    <div className="flex justify-between bg-gray-100">
      <div className="flex">
        <div>
          <div>
            <h1>Using Good Quality Materials</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h1>100% Handmade Products</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <div>
            <h1>Modern Fashion Design</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h1>Discount for Bulk Orders</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="">
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
        <div>
          <Image src={Event1} alt="event1" className="w-30" />
          <div>
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button>See All Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
