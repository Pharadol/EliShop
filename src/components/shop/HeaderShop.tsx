"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSearch, handleExpanded } from "@/redux/slices/productsSlice";

import { Input } from "@nextui-org/input";
import { FaSearch } from "react-icons/fa";
import { RiFilter3Line } from "react-icons/ri";
import { RootState } from "@/redux/store";

function HeaderShop() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const isExpandedFilter = useSelector(
    (state: RootState) => state.products.filterState.isExpanded
  )

  useEffect(() => {
    dispatch(filterSearch({ searchText: search }));
  }, [search, dispatch]);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Shop</h1>
      <div className="flex items-center mb-6 w-full justify-between">
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
        </div>
      </div>
    </>
  );
}

export default HeaderShop;
