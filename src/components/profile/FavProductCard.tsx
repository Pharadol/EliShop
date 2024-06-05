import Link from "next/link";
import Image from "next/image";
import { Product } from "@/model/Product";
import { getThumbUrl, getCategory, getPrice } from "@/utils/productHelperUtils";
import { IoCloseOutline } from "react-icons/io5";
import { removeFromFavorite } from "@/redux/slices/favoriteSlice";
import { useDispatch } from "react-redux";

function FavProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(product.id));
  };

  return (
    <article className="flex border-[1px] border-zinc-200 dark:border-zinc-800 rounded-md relative group">
      <Link href={`/shop/product/${product.id}`}>
        <div className="relative object-cover bg-white rounded-md w-[120px] md:w-[150px] overflow-hidden">
          <Image
            className="w-full h-full rounded-md hover:scale-105 duration-200"
            src={getThumbUrl(product)}
            alt="product-image"
            width={400}
            height={400}
            priority
          />
        </div>
      </Link>
      <div className="p-2 pr-7">
        <Link
          href={`/shop/product/${product.id}`}
          className="line-clamp-2 font-semibold mb-1 hover:opacity-70"
        >
          {product.attributes.name}
        </Link>
        <div>{getCategory(product)}</div>
        <div className="text-xl mt-1">
          <span>${getPrice(product)}</span>
          {product.attributes.discount && (
            <span className="line-through text-red-500 text-sm ml-2">
              ${product.attributes.price}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleRemoveFromFavorite}
        title="remove from favorites"
        className="hover:bg-zinc-100 hover:dark:bg-zinc-800 rounded-md absolute top-2 right-2 hidden group-hover:block duration-200"
      >
        <IoCloseOutline className="text-2xl" />
      </button>
    </article>
  );
}

export default FavProductCard;
