"use client";
import { MdFavorite } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addToFavorite } from "@/redux/slices/favoriteSlice";
import { Product } from "@/model/Product";

function GroupButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex mt-3 sm:mt-6 gap-x-4 w-full sm:max-w-[400px]">
      <button
        onClick={() => dispatch(addToFavorite(product))}
        className="w-full bg-cyan-500 dark:bg-cyan-600 text-gray-100 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:opacity-70 duration-100 "
      >
        <span>Favorite</span>
        <MdFavorite />
      </button>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full bg-emerald-500 dark:bg-emerald-600 text-gray-100 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:opacity-70 duration-100 "
      >
        <span>Add to cart</span>
        <RiShoppingCart2Fill />
      </button>
    </div>
  );
}

export default GroupButton;
