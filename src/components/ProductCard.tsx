import Link from "next/link";
import Image from "next/image";
import { Product } from "@/model/Product";
import { getCategory, getTags, getThumbUrl } from "@/utils/productHelperUtils";
import { MdFavorite } from "react-icons/md";

function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product);
  const tags = getTags(product);
  const discount = product.attributes.discount;

  return (
    <li className="group border-[1px] rounded-md hover:border-gray-400 transition-all duration-200">
      <a href="#">
        <div className="relative object-cover bg-white rounded-md overflow-hidden">
          <Image
            className="w-full h-full rounded-md"
            src={getThumbUrl(product)}
            alt="product-image"
            width={400}
            height={400}
            priority
            // layout="fill"
            // objectFit="cover"
          />
          <div className="abosute bottom-0 flex flex-wrap items-center gap-2 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
            <button className="bg-gray-800 text-gray-300 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-200 hover:text-gray-800 duration-100 border-[1px] border-gray-700 ">
              <span>Add to cart</span>
            </button>
            <button className="bg-gray-800 text-gray-300 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-200 hover:text-gray-800 duration-100 border-[1px] border-gray-700 ">
              <span>Favorite</span>
              <MdFavorite />
            </button>
          </div>
        </div>
        <div className="p-3">
          <h2 className="font-bold line-clamp-2">{product.attributes.name}</h2>
          <span>{category}</span>
          {tags.length > 0 && (
            <div className="gap-x-1 flex flex-wrap">
              {tags.map((tag) => (
                <span
                  className="border-[1px] px-1 rounded-sm border-gray-300 bg-gray-100"
                  key={tag.id}
                >
                  {tag.attributes.title}
                </span>
              ))}
            </div>
          )}
          <div className="flex justify-end items-end h-full">
            {discount ? (
              <div>
                <span className="line-through text-gray-500 text-sm mr-2">
                  ${product.attributes.price}
                </span>
                <span className="text-xl">
                  ${product.attributes.price - discount}
                </span>
              </div>
            ) : (
              <span className="text-xl">${product.attributes.price}</span>
            )}
          </div>
        </div>
      </a>
    </li>
  );
}

export default ProductCard;
