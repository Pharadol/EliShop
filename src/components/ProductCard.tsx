import Link from "next/link";
import Image from "next/image";
import { Product } from "@/model/Product";
import { getCategory, getTags, getThumbUrl } from "@/utils/productHelperUtils";
import { MdFavorite } from "react-icons/md";
import { Chip } from "@nextui-org/chip";
import { PiShoppingCartLight } from "react-icons/pi";

function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product);
  const discount = product.attributes.discount;

  return (
    <li className="group border-[1px] border-zinc-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-gray-600 rounded-md  transition-all duration-200">
      <Link href={`/shop/product/${product.id}`}>
        <div className="relative object-cover bg-white rounded-md overflow-hidden">
          <Image
            className="w-full h-full rounded-md"
            src={getThumbUrl(product)}
            alt="product-image"
            width={400}
            height={400}
            priority
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
        <div className="p-3 flex flex-col">
          <h2 className="font-bold line-clamp-2 mb-2 min-h-12">
            {product.attributes.name}
          </h2>
          <Chip className="bg-zinc-200 dark:bg-zinc-800 text-xs">
            {category}
          </Chip>
          <div className="flex justify-between items-end h-full text-xl mt-2">
            {discount ? (
              <div>
                <span>${product.attributes.price - discount}</span>
                <span className="line-through text-red-500 text-sm ml-2">
                  ${product.attributes.price}
                </span>
              </div>
            ) : (
              <span>${product.attributes.price}</span>
            )}
            <button className=" block sm:hidden bg-gray-200 dark:bg-zinc-800 p-1 rounded-md hover:bg-gray-300 dark:hover:bg-zinc-700">
              <PiShoppingCartLight className="  rounded-md w-6 h-6 text-zinc-900 dark:text-zinc-300" />
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
