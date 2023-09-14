import { Products } from "@/utils/mock";
import ProductList from "@/view/ProductList";
import { StaticImageData } from "next/image";
import React from "react";

export default function AllProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {Products.map((product) => (
        <ProductList
          key={product.id}
          title={product.title}
          name={product.name}
          price={product.price}
          img={product.image as StaticImageData}
        />
      ))}
    </div>
  );
}
