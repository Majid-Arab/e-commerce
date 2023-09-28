import React from "react";
import ProductList from "@/components/ProductList";
import Product4 from "/public/p4.png";
import Product2 from "/public/p2.png";
import Product3 from "/public/p3.png";
import { Badge } from "../components/ui/badge";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

export default function ProductCard() {
  const productCheck = Products.slice(0, 3);

  return (
    <div>
      <Badge className="bg-transparent text-bold text-darkBlue mt-24">
        PROMOTIONS
      </Badge>
      <h1 className="text-3xl text-center font-bold -pr-40 my-6">
        Our Promotions Events
      </h1>
      <div className="flex ">
        {productCheck.map((product) => (
          <ProductList
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
          />
        ))}
      </div>
    </div>
  );
}
