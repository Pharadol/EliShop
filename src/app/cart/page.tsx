"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getPrice } from "@/utils/productHelperUtils";
import { CartProduct } from "@/model/Cart";
import { CurrentUser } from "@/model/Auth";
import { useState, useEffect } from "react";

import TableShoppingCart from "@/components/cart/TableShoppingCart";
import ConfirmCheckoutModal from "@/components/cart/ConfirmCheckoutModal";
import EmptyState from "@/components/EmptyState";
import Container from "@/components/Container";
import LoadingState from "@/components/LoadingState";

function Page() {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const totalPrice = () => {
    const totalPrice = cart.map((item: CartProduct) => {
      const price = getPrice(item);
      return price * item.quantity;
    });

    return totalPrice.reduce((accumulator: number, item: number) => {
      return accumulator + item || 0;
    });
  };

  return (
    <Container className="bg-white dark:bg-zinc-900">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      {isLoading ? (
        <LoadingState />
      ) : user ? (
        cart.length <= 0 ? (
          <EmptyState status="empty-cart" />
        ) : (
          <>
            <TableShoppingCart cartItems={cart} />
            <div className="flex flex-col mt-6">
              <div className="flex justify-between text-xl mb-2">
                <p className="font-semibold">Total Cost</p>
                <span>${totalPrice()}</span>
              </div>
              <ConfirmCheckoutModal />
            </div>
          </>
        )
      ) : (
        <EmptyState status="guest" />
      )}
    </Container>
  );
}

export default Page;
