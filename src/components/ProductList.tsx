"use client";
import { Product } from "@/model/Product";
import ProductCard from "./ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { setProducts, initFilterProduct } from "@/redux/slices/productsSlice";

import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";

function ProductList({ list }: { list: Product[] }) {
  const dispatch = useDispatch();
  const productsState: any = useSelector(
    (state: { products: any }) => state?.products
  );
  const productList = productsState?.filteredProducts;

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(setProducts(list));
    dispatch(initFilterProduct());
  }, [list, dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Shop</h1>
      <div className="flex items-center mb-6 w-full justify-between">
        <div className="relative inline-flex lg:w-[400px] h-9 text-base text-primeColor border-[1px] border-gray-300 items-center gap-2 justify-between px-4 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search ? (
            <IoCloseOutline
              onClick={() => setSearch("")}
              className="w-5 h-5 hover:cursor-pointer duration-200"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer text-gray-500" />
          )}
        </div>
        <div className="inline-flex gap-2">
          <button className="p-1 border-[1px] rounded-md hover:border-gray-700 sm:hidden">
            <BsFilter className="text-2xl" />
          </button>
          <button className="flex items-center py-1 px-2 border-[1px] rounded-md hover:border-gray-700">
            Price
            <MdOutlineExpandMore />
          </button>
        </div>
      </div>

      <ol className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {productList.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ol>
    </div>
  );
}

export default ProductList;
