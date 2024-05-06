import { Product } from "@/model/Product";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

function ProductList() {
  const productsState: any = useSelector(
    (state: { products: any }) => state?.products
  );
  const productList = productsState?.filteredProducts;

  return (
    <ol className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {productList.map((item: Product) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ol>
  );
}

export default ProductList;
