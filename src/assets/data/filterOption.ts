import { Option } from "@/model/FilterState"

let categoryOption: Option[] = [
  {
    id: "computer-accessories",
    title: "Computer Accessories",
    isChecked: false,
  },
  {
    id: "household-items",
    title: "Household Items",
    isChecked: false,
  },
  {
    id: "mobile-gadgets",
    title: "Mobile & Gadgets",
    isChecked: false,
  },
  {
    id: "kitchenware",
    title: "Kitchenware",
    isChecked: false,
  },
]

let tagOption: Option[] = [
  {
    id: "recommend",
    title: "Recommend",
    isChecked: false,
  },
  {
    id: "best-seller",
    title: "Best Seller",
    isChecked: false,
  },
  {
    id: "sale",
    title: "Sale",
    isChecked: false,
  },
]

export { categoryOption, tagOption }