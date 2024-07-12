import { Product } from "@/model/Product";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.filteredProducts
  )

  return (
    <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {productList.map((item: Product) => (
        <li key={item.id}>
          <ProductCard product={item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
