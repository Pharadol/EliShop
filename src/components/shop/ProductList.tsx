import { Product } from "@/model/Product";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EmptyState from "@/components/EmptyState"

function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.filteredProducts
  );

  return (
    <>
      {productList.length > 0 ? (
        <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {productList.map((item: Product) => (
            <li key={item.id}>
              <ProductCard product={item} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState status="empty-search" desc="No items found" />
      )}
    </>
  );
}

export default ProductList;
