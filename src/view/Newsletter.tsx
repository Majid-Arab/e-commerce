import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Newsletter() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl text-center font-bold -pr-40 my-6 ">
        Subscribe Our Newsletter
      </h1>
      <p className="tracking-wide	">
        Get the latest information and promo offers directly
      </p>
      <div className="flex w-full  justify-center space-x-2 mt-10">
        <Input type="email" placeholder="Email" className="max-w-xs" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
