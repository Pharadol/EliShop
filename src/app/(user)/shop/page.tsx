import { fetchProduct } from "@/api/products";
import { Product } from "@/model/Product";
import { getCategories, getTag, getThumbUrl } from "@/utils/blogHelperUtils";
import Image from "next/image";

async function ShopePage() {
  const products: Product[] = await fetchProduct();

  return (
    <div>
      ShopePage
      {products.map((item) => (
        <div key={item.id}>
          <Image
            src={getThumbUrl(item)}
            alt="product-image"
            width={200}
            height={200}
          />
          <h1 className="font-bold">{item.attributes.name}</h1>
          <p>
            Category: 
            {getCategories(item).map((item) => (
              <span key={item.id}>{item.attributes.title}</span>
            ))}
          </p>
          <p>
            tag: 
            {getTag(item)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShopePage;
