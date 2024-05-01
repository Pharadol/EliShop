import { fetchProducts } from "@/app/api/products";
import Container from "@/components/Container";
import FilterSection from "@/components/shop/FilterSection";
import ProductList from "@/components/shop/ProductList";
import { Product } from "@/model/Product";

async function ShopePage() {
  const products: Product[] = await fetchProducts();

  return (
    <Container>
      <div className="flex flex-col sm:flex-row gap-2">
        <FilterSection />
        <ProductList list={products} />
      </div>
    </Container>
  );
}

export default ShopePage;
