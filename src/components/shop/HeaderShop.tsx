"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSearch, handleExpanded } from "@/redux/slices/productsSlice";

import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { RiFilter3Line } from "react-icons/ri";

function HeaderShop() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const filterSlice: any = useSelector(
    (state: { products: any }) => state?.products
  );
  const isExpandedFilter = filterSlice?.filterState.isExpanded;

  useEffect(() => {
    dispatch(filterSearch({ searchText: search }));
  }, [search, dispatch]);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Shop</h1>
      <div className="flex items-center mb-6 w-full justify-between">
        {/* <div className="relative w-fit inline-flex h-9 text-base text-primeColor border-[1px] border-gray-300 items-center gap-2 justify-between px-4 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex h-full w-fit outline-none bg-transparent placeholder:text-gray-600"
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
        </div> */}
        <Input
          value={search}
          onValueChange={setSearch}
          isClearable
          type="text"
          variant="bordered"
          placeholder="Search..."
          className="max-w-[400px]"
          startContent={
            <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <div className="inline-flex gap-2">
          <button
            className={`${
              isExpandedFilter
                ? "text-zinc-800 dark:text-zinc-300"
                : "text-zinc-400 dark:text-zinc-600"
            }  border-zinc-400 dark:border-zinc-600 hover:border-zinc-800 dark:hover:border-zinc-300 p-1 border-[1px] rounded-md`}
            onClick={() => dispatch(handleExpanded(!isExpandedFilter))}
          >
            <RiFilter3Line className="text-2xl" />
          </button>
          {/* <button className="flex items-center h-10 px-2 border-[1px] rounded-md hover:border-gray-700">
            Price
            <MdOutlineExpandMore />
          </button> */}
        </div>
      </div>
    </>
  );
}

export default HeaderShop;
