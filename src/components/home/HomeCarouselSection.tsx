"use client";
import { useEffect, useState } from "react";
import { Product } from "@/model/Product";

import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import SkeletonProductCarousel from "../skeleton/SkeletonProductCarousel";

interface Props {
  title: string;
  tag: string;
}

function HomeCarouselSection({ title, tag }: Props) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProductByTags();
  }, []);

  const fetchProductByTags = async () => {
    const queryURL = `${process.env.API_URL}/api/products?populate=*&filters[tags][key][$eq]=${tag}`;
    try {
      const response = await axios.get(queryURL);
      setProductList(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching products", error);
      setIsLoading(false);
      throw new Error("Failed to fetch products");
    }
  };
  return (
    <section className="max-w-screen-xl my-6 px-3 py-6 sm:py-9 mx-auto">
      <h2 className="text-xl sm:text-3xl font-semibold mb-4">{title}</h2>
      {
        isLoading? (
          <SkeletonProductCarousel />
        ) : (
          <ProductCarousel items={productList} />
        )
      }
    </section>
  );
}

export default HomeCarouselSection;
