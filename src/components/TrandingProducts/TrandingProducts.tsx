import { GetStaticProps, NextPage } from "next";
import { Key, useEffect, useState } from "react";
import { productInterface } from "@/interface/ProductInterface";
import ProductCard from "../ProductCard";

const TrandingProducts: NextPage = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("https://tech-deal-backend-o5ta.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold my-6">Our Tranding Products</h1>
      <div className="grid md:grid-cols-4 space-y-2">
        {
            products.map((product,index) => <ProductCard key={index} product={product}/>).splice(0,4)
        }
      </div>
    </>
  );
};
export default TrandingProducts;
