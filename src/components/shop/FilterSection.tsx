"use client";
import { useEffect, useState } from "react";

import { categoryOption, tagOption } from "@/assets/data/filterOption";
import GroupFilterOption from "./GroupFilterOption";

import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "@/redux/slices/productsSlice";

function FilterSection() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categoryOption);
  const [tag, setTag] = useState(tagOption);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filterSlice: any = useSelector(
    (state: { products: any }) => state?.products
  );
  const filterState = filterSlice?.filterState;

  const handleCategoryChange = (id: string) => {
    setCategory((prevCategory) =>
      prevCategory.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleTagChange = (id: string) => {
    setTag((prevTag) =>
      prevTag.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const selectedCategory = category
        .filter((item) => item.isChecked)
        .map((item) => item.id);
      const selectedTag = tag
        .filter((item) => item.isChecked)
        .map((item) => item.id);

      const params = {
        selectedCategory: selectedCategory,
        selectedTag: selectedTag,
        priceRange: {
          min: minPrice === "" ? undefined : +minPrice,
          max: maxPrice === "" ? undefined : +maxPrice,
        },
      };
      dispatch(filterProducts(params));
    };

    fetchData();
  }, [category, tag, minPrice, maxPrice, dispatch]);

  return (
    <div
      className={`transition-all duration-300 overflow-hidden px-2 ${
        filterState.isExpanded ? "max-h-screen py-4" : "h-0 max-h-0 py-0"
      }`}
    >
      <button className="font-bold border-b-[1px] block pb-2 mb-2 border-zinc-300 dark:border-zinc-600 w-full text-left">
        FILTER
      </button>
      <div>
        <GroupFilterOption title="Category">
          {category.map((item) => (
            <div key={item.id} className="min-w-fit mb-1">
              <input
                type="checkbox"
                id={item.id}
                checked={item.isChecked}
                onChange={() => handleCategoryChange(item.id)}
                className="cursor-pointer"
              />
              <label htmlFor={item.id} className="pl-2 cursor-pointer w-fit">
                {item.title}
              </label>
            </div>
          ))}
        </GroupFilterOption>
        <GroupFilterOption title="Tag">
          {tag.map((item) => (
            <div key={item.id} className="w-fit mb-1">
              <input
                type="checkbox"
                id={item.id}
                checked={item.isChecked}
                onChange={() => handleTagChange(item.id)}
                className="cursor-pointer"
              />
              <label htmlFor={item.id} className="pl-2 cursor-pointer">
                {item.title}
              </label>
            </div>
          ))}
        </GroupFilterOption>
        <GroupFilterOption title="Price Range" last>
          <div className="mb-3">
            <input
              type="number"
              value={minPrice}
              max={maxPrice}
              placeholder="$ Min"
              onChange={(e) => setMinPrice(e.target.value)}
              className="border-[1px] max-w-[85px] px-2 py-1 rounded-sm mr-2"
            />
            -
            <input
              type="number"
              value={maxPrice}
              min={minPrice}
              placeholder="$ Max"
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border-[1px] max-w-[85px] px-2 py-1 rounded-sm ml-2"
            />
          </div>
        </GroupFilterOption>
      </div>
    </div>
  );
}

export default FilterSection;
