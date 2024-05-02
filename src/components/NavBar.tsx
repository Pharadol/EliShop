"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/EliShopLogo.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import ThemeToggle from "./ToggleTheme";
import AuthModal from "./auth/AuthModal";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function NavBar() {
  const pathname = usePathname();
  const isBrowser = typeof window !== "undefined";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
  let currentUser = null;
  if (isBrowser && localStorage.getItem("currentUser")) {
    // setCurrentUser(JSON.parse(localStorage.getItem("currentUser")!));
    currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    console.log("userC", currentUser);
  }
  return (
    <div className="w-full h-20 bg-white dark:bg-zinc-900 border-b-[1px] border-b-gray-300 dark:border-b-zinc-900">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-20" />
        </Link>
        <ul className="flex-cols hidden md:flex items-center gap-2">
          {navBarList.map((item) => (
            <li
              key={item?.link}
              className=" last:bg-!border-none md:border-r-[2px] border-r-gray-300 dark:border-r-gray-700"
            >
              <Link
                href={item?.link}
                className={`flex hover:font-medium w-16 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 dark:text-gray-200
              ${
                pathname === item?.link &&
                "text-gray-950 dark:text-gray-50 underline"
              }`}
              >
                {item?.title}
              </Link>
            </li>
          ))}
          <ThemeToggle />
          <AuthModal />
          <button className="hidden bg-emerald-200 dark:bg-zinc-800 border-emerald-500 dark:border-gray-500 text-emerald-600 dark:text-gray-300 hover:bg-emerald-300 dark:hover:bg-zinc-700 border-[1px] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
            <span>M</span>
          </button>
        </ul>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
}

export default NavBar;
