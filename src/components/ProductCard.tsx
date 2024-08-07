import Link from "next/link";
import Image from "next/image";
import { Product } from "@/model/Product";
import { getCategory, getThumbUrl, getPrice } from "@/utils/productHelperUtils";
import { MdFavorite } from "react-icons/md";
import { Chip } from "@nextui-org/chip";
import { PiShoppingCartLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addToFavorite } from "@/redux/slices/favoriteSlice";

function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const category = getCategory(product);
  const discount = product.attributes.discount;
  const price = getPrice(product);

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await dispatch(addToCart(product));
  };

  const handleAddToFavorite = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await dispatch(addToFavorite(product));
  };

  return (
    <article className="group border-[1px] border-zinc-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-gray-600 rounded-md  transition-all duration-200">
      <Link href={`/shop/product/${product.id}`}>
        <div className="relative object-cover bg-white rounded-md rounded-b-none overflow-hidden">
          <Image
            className="w-full h-full rounded-md"
            src={getThumbUrl(product)}
            alt={`product image ${product.attributes.name}`}
            width={400}
            height={400}
            priority
          />
          <div className="absolute w-full bottom-0 hidden lg:flex flex-wrap gap-2 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
            <button
              onClick={(e) => handleAddToCart(e)}
              className="bg-gray-800 text-gray-300 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-200 hover:text-gray-800 duration-100 border-[1px] border-gray-700 "
            >
              <span>Add to cart</span>
            </button>
            <button
              onClick={(e) => handleAddToFavorite(e)}
              className="bg-gray-800 text-gray-300 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-200 hover:text-gray-800 duration-100 border-[1px] border-gray-700 "
            >
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
                <span>${price}</span>
                <span className="line-through text-red-500 text-sm ml-2">
                  ${product.attributes.price}
                </span>
              </div>
            ) : (
              <span>${price}</span>
            )}
            <button
              onClick={(e) => handleAddToCart(e)}
              className="block lg:hidden bg-gray-200 dark:bg-zinc-800 p-1 rounded-md hover:bg-gray-300 dark:hover:bg-zinc-700"
            >
              <PiShoppingCartLight className="  rounded-md w-6 h-6 text-zinc-900 dark:text-zinc-300" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
