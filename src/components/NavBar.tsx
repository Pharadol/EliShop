"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/EliShopLogo.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import ThemeToggle from "./ToggleTheme";

function NavBar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="w-full h-20 bg-white dark:bg-zinc-900 border-b-[1px] border-b-gray-300 dark:border-b-zinc-900">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20"/>
        </Link>
        <div className="flex-cols hidden md:flex items-center gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 dark:text-gray-200 md:border-r-[2px] border-r-gray-300 dark:border-r-gray-700 last:border-r-0
             ${pathname === item?.link && "text-gray-950 dark:text-gray-50 underline"}`}
            >
              {item?.title}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
}

export default NavBar;



