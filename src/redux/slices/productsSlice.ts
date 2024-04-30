import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/model/Product";

const initialState = {
  products: [] as Product[],
  filteredProducts: [] as Product[],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    initFilterProduct: (state) => {
      state.filteredProducts = state.products;
    },
    filterProducts: (
      state,
      action: PayloadAction<{
        selectedCategory: string[];
        selectedTag: string[];
        priceRange: { min: number | undefined; max: number | undefined };
      }>
    ) => {
      const { selectedCategory, selectedTag, priceRange } = action.payload;

      const filteredProducts = state.products.filter((item) => {
        const category = selectedCategory.length > 0 ? selectedCategory : null;
        const tags = selectedTag.length > 0 ? selectedTag : null;

        // Filter by category
        const categoryMatch =
          !category ||
          category.includes(item.attributes?.category?.data?.attributes?.key);

        // Filter by tag
        const tagMatch =
          !tags ||
          tags.some((tag) =>
            item.attributes?.tags?.data?.some(
              (productTag) => productTag.attributes.key === tag
            )
          );

        // Filter by price range
        const price = item.attributes?.discount
          ? item.attributes.price - item.attributes?.discount
          : item.attributes.price;
        const min = priceRange?.min || 0;
        const max = priceRange?.max;

        const minMatch = !min || price >= min;
        const maxMatch = !max || price <= max;

        return categoryMatch && tagMatch && minMatch && maxMatch;
      });

      state.filteredProducts = filteredProducts;
    },
    filterSearch: (state, action: PayloadAction<{ searchText: string }>) => {
      const searchText = action.payload.searchText.toLowerCase().trim();
      const filteredProducts = state.products.filter((item) => {
        const productName = item.attributes.name.toLowerCase().trim();
        const searchMatch =
          !searchText || productName.includes(searchText);
        return searchMatch;
      });

      state.filteredProducts = filteredProducts;
    },
  },
});

export const { setProducts, initFilterProduct, filterProducts, filterSearch } =
  productsSlice.actions;
export default productsSlice.reducer;
