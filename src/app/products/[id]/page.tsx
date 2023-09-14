import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock";
import ProductList from "@/view/ProductList";
import Image, { StaticImageData } from "next/image";

const getProductID = (id: number) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { slug: number } }) {
  const id = getProductID(params.slug);
  return (
    <div className="flex">
      {id.map((product) => (
        <div key={product.id} className="flex">
          <div>
            <div>
              <Image src={product.image} alt="product" />
            </div>
            <div></div>
            <div>
              <h1>{product.title}</h1>
              <h2>{product.name}</h2>
              <span>SELECT SIZE</span>
              <div>
                <h4>Quantity</h4>
              </div>
              <div>
                <Button>Add to Cart</Button> <span>{product.price}</span>
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
