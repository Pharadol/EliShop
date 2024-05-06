import Container from "@/components/Container";
import { Product } from "@/model/Product";
import { fetchProducts } from "@/app/api/products";
import Image from "next/image";
import { getThumbUrl, getCategory, getTags } from "@/utils/productHelperUtils";
import QuillEditor from "@/components/QuillEditor";
import { Chip } from "@nextui-org/chip";
import { MdFavorite } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";

interface Props {
  params: {
    id: string;
  };
}

async function ProductPage({ params }: Props) {
  const product: Product = await fetchProducts(params.id);
  const category = getCategory(product);
  const tags = getTags(product);
  const discount = product.attributes.discount;

  return (
    <Container className="!p-0 sm:!py-6 sm:!px-6 text-gray-700 dark:text-gray-300">
      <div className="bg-white dark:bg-zinc-800 sm:rounded-md shadow-md">
        <div className="flex flex-col sm:flex-row items-start gap-x-6 p-3 w-full">
          <div className="relative object-cover bg-white rounded-md overflow-hidden w-full sm:w-[450px]">
            <Image
              className="w-full h-full rounded-md"
              src={getThumbUrl(product)}
              alt="product-image"
              width={900}
              height={900}
              priority
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-y-3 mt-4 sm:mt-2">
              <div className="flex flex-col sm:flex-col-reverse gap-y-2 sm:gap-y-4">
                {discount ? (
                  <div className="text-2xl">
                    <span className="text-green-400">
                      ${product.attributes.price - discount}
                    </span>
                    <span className="line-through text-gray-500 dark:gray-300 text-base ml-2">
                      ${product.attributes.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-green-400 text-2xl">
                    ${product.attributes.price}
                  </span>
                )}
                <h1 className="text-xl text-gray-900 dark:text-gray-200 font-semibold">
                  {product.attributes.name}
                </h1>
              </div>
              {category && <div>Category : {category}</div>}
              {tags.length > 0 && (
                <div className="gap-x-1 flex flex-wrap mt-2">
                  Tag :
                  {tags.map((tag) => (
                    <Chip className="bg-zinc-100 dark:bg-zinc-700" key={tag.id}>
                      {tag.attributes.title}
                    </Chip>
                  ))}
                </div>
              )}
              <div className="flex mt-3 sm:mt-6 gap-x-4 w-full sm:max-w-[400px]">
                <button className="w-full bg-cyan-500 dark:bg-emerald-60 text-gray-100 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:opacity-70 duration-100 ">
                  <span>Favorite</span>
                  <MdFavorite />
                </button>
                <button className="w-full bg-emerald-500 dark:bg-emerald-60 text-gray-100 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:opacity-70 duration-100 ">
                  <span>Add to cart</span>
                  <RiShoppingCart2Fill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-4 !pb-20 sm:p-8">
          <h2 className=" mb-4 border-t-[1px] underline pb-2 pt-4 underline-offset-4 border-zinc-200 dark:border-zinc-700 text-gray-900 dark:text-gray-200">
            Product Detail
          </h2>
          <QuillEditor content={product.attributes.description} />
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
