import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Featured from "@/view/Featured";
import Hero from "@/view/Hero";
import Newsletter from "@/view/Newsletter";
import ProductSample from "@/view/ProductSample";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <ProductCard />
      {/* <ProductSample />
      <Newsletter />
      <Footer /> */}
    </div>
  );
}
