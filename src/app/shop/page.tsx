"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { Product } from "@/model/Product";

import { useDispatch } from "react-redux";
import { setProducts, initFilterProduct } from "@/redux/slices/productsSlice";

import Container from "@/components/Container";
import FilterSection from "@/components/shop/FilterSection";
import HeaderShop from "@/components/shop/HeaderShop";
import ProductList from "@/components/shop/ProductList";
import SkeletonProductList from "../../components/shop/SkeletonProductList";

function ShopePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleFetchProducts = async () => {
    try {
      const response: Product[] = await fetchProducts();
      dispatch(setProducts(response));
      dispatch(initFilterProduct());
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch productList. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="flex flex-col sm:flex-row gap-2">
        <FilterSection />
        <div className="w-full">
          <HeaderShop />
          {isLoading ? (
            <SkeletonProductList />
          ) : error ? (
            <div className="flex justify-center items-center">
              <p className="text-center text-2xl text-gray-600">{error}</p>
            </div>
          ) : (
            <ProductList />
          )}
        </div>
      </div>
    </Container>
  );
}

export default ShopePage;
