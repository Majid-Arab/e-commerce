import { Products } from "@/utils/mock";
import ProductList from "@/view/ProductList";
import { StaticImageData } from "next/image";

const getProductsCategory = (category: string) => {
  return Products.filter(
    (product) =>
      product.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );
};

export default function Page({ params }: { params: { slug: string } }) {
  const category = getProductsCategory(params.slug);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {category.length > 0 ? (
        category.map((product) => (
          <ProductList
            key={product.id}
            title={product.title}
            name={product.name}
            price={product.price}
            img={product.image as StaticImageData}
          />
        ))
      ) : (
        <>
          <span>No Products Found</span>
        </>
      )}
    </div>
  );
}
