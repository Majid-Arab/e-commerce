import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock";
import { ShoppingCartIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import MathNumbers from "@/components/Number";

const getProductID = (id: number) => {
  return Products.filter((product) => product.id == id);
};
const size = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: number } }) {
  const id = getProductID(params.id);

  return (
    <div>
      {id.map((product) => (
        <div key={product.id} className="pt-20">
          <div className="flex">
            <div className="pr-8">
              <Image
                src={product.image}
                alt="product"
                width={100}
                height={100}
              />
            </div>

            <div className="flex">
              <div>
                <Image src={product.image} alt="product" width={571} />
              </div>

              <div className="flex flex-col justify-between h-80 pl-3 mt-16	">
                <div>
                  <h1 className="text-3xl">{product.title}</h1>
                  <h2 className="text-2xl text-gray-300">{product.name}</h2>
                </div>
                <div>
                  <div>
                    <span className="font-bold">SELECT SIZE</span>
                  </div>
                  <div className="pt-5 flex justify-start gap-5 text-gray-500	">
                    {size.map((size) => (
                      <button className="radius-full h-10 w-10 rounded-full hover:bg-slate-100">
                        <span className="font-bold">{size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-start gap-10 ">
                  <h4 className="font-bold">Quantity:</h4>
                  <MathNumbers />
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <Button className="font-bold ">
                      <ShoppingCartIcon className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                  <div>
                    <span className="text-2xl font-bold">
                      ${product.price}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>Product Information</h3>
            <div>
              <h4>PRODUCT DETAILS</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h4>PRODUCT CARE</h4>
              <ul>
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
