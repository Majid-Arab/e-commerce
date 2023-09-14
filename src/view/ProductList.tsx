import React from "react";
import Image, { StaticImageData } from "next/image";

export default function ProductCard(props: {
  title: string;
  name?: string;
  price: number;
  img: StaticImageData;
}) {
  return (
    <div className="flex flex-col gap-2 justify-between py-8">
      <Image src={props.img} alt="product" />
      <h3 className="text-md font-bold">{props.title}</h3>
      <span className="text-gray-500 font-bold text-sm">{props.name}</span>
      <p className="font-bold text-xl">${props.price}</p>
    </div>
  );
}
