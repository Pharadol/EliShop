"use client";

import React from "react";
import { CartProduct } from "@/model/Cart";
import { getPrice, getCategory, getThumbUrl } from "@/utils/productHelperUtils";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
const headerColumns = [
  {
    key: "product",
    label: "Product",
  },
  {
    key: "price",
    label: "Price",
    alignCenter: true,
  },
  {
    key: "quantity",
    label: "Quantity",
    alignCenter: true,
  },
  {
    key: "total",
    label: "Total",
    alignCenter: true,
  },
  {
    key: "action",
    label: "Action",
    alignCenter: true,
  },
];

function TableShoppingCart({ cartItems }: { cartItems: CartProduct[] }) {
  const dispatch = useDispatch();

  return (
    <>
      <Table removeWrapper>
        <TableHeader>
          {headerColumns.map((item) => (
            <TableColumn
              className={item.alignCenter ? "text-center" : ""}
              key={item.key}
            >
              {item.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow
              key={item.id}
              className="border-b-[1px] dark:border-zinc-800"
            >
              <TableCell>
                <Link href={`/shop/product/${item.id}`}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-white rounded-sm sm:mr-2 w-fit">
                      <Image
                        src={getThumbUrl(item)}
                        alt="product-image"
                        width={80}
                        height={80}
                        className="rounded-sm"
                      ></Image>
                    </div>
                    <div>
                      <Link
                        href={`/shop/product/${item.id}`}
                        className="text-sm  font-semibold line-clamp-2"
                      >
                        {item.attributes.name}
                      </Link>
                      <p className="mt-2 hidden sm:block">
                        {getCategory(item)}
                      </p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="text-center">${getPrice(item)}</TableCell>
              <TableCell>
                <div className="text-center flex justify-center">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="flex justify-center items-center w-5 h-5 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:opacity-70"
                  >
                    <span>-</span>
                  </button>
                  <div className="mx-1">{item.quantity}</div>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="flex justify-center items-center w-5 h-5 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:opacity-70"
                  >
                    <span>+</span>
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-center">
                ${item.quantity * getPrice(item)}
              </TableCell>
              <TableCell className="text-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-zinc-100 dark:bg-zinc-800 rounded-md hover:opacity-70"
                >
                  <IoCloseOutline className="text-2xl" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default TableShoppingCart;
