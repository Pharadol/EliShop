"use client";
import { useState, useEffect } from "react";
import { CurrentUser } from "@/model/Auth";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import Container from "@/components/Container";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import FavProductCard from "@/components/profile/FavProductCard";

function Page() {
  const favorite = useSelector((state: RootState) => state.favoriteSlice);
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

  return (
    <Container>
      {isLoading ? (
        <LoadingState />
      ) : user ? (
        <>
          <div className="flex flex-col items-center pb-8 border-b-[1px] dark:border-zinc-800 mb-4">
            <div className="text-4xl bg-zinc-200 dark:bg-zinc-800 !border-zinc-500 dark:!border-gray-500 text-gray-600 dark:text-gray-300 border-2 font-semibold rounded-full w-28 h-28 flex justify-center items-center">
              <span>{user?.username.charAt(0).toUpperCase()}</span>
            </div>
            <h1 className="text-xl my-4">{user.username}</h1>
          </div>
            <h2 className="text-2xl font-semibold mb-6">Favorite List ({favorite.length})</h2>
          {favorite.length <= 0 ? (
            <EmptyState status="empty-favorites" />
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
              {favorite.map((item) => (
                <li key={item.id}>
                  <FavProductCard product={item} />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <EmptyState status="guest" />
      )}
      <div></div>
    </Container>
  );
}

export default Page;
