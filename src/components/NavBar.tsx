"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/EliShopLogo.png";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ToggleTheme";
import AuthModal from "./auth/AuthModal";
import { CurrentUser } from "@/model/Auth";
import { useState, useEffect } from "react";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  Spinner,
  Skeleton,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/slices/authSlice";

import { IoCloseOutline } from "react-icons/io5";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { PiStorefront } from "react-icons/pi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RootState } from "@/redux/store";

function NavBar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const cartSlice = useSelector((state: RootState) => state.cartSlice);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  let cartQuantity: number = cartSlice.length | 0;

  const navBarMenu = [
    {
      title: "Home",
      link: "/",
      icon: <GrHomeRounded />,
    },
    {
      title: "Shop",
      link: "/shop",
      icon: <PiStorefront />,
    },
    {
      title: "Cart",
      link: "/cart",
      icon: <FiShoppingCart />,
      isMobileOnly: true,
    },
    {
      title: "Profile",
      link: "/profile",
      icon: <FiUser />,
    },
  ];

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");

    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    window.location.href = "/";
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="w-full h-16 bg-white dark:bg-zinc-900 border-b-[1px] border-b-gray-300 dark:border-b-zinc-800"
    >
      <div className="h-full w-full mx-auto xl:px-0 flex items-center justify-between gap-2">
        <div className="flex justify-center items-center gap-3">
          <button
            className="my-toggle sm:hidden w-7 pb-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoCloseOutline className="w-full h-full" />
            ) : (
              <CgMenuLeftAlt className="w-full h-full" />
            )}
          </button>
          <NavbarBrand onClick={() => setIsMenuOpen(false)}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" className="w-20" />
            </Link>
          </NavbarBrand>
        </div>
        <div className="flex justify-center items-center gap-3">
          <ul className="flex-cols hidden sm:flex items-center gap-2">
            {navBarMenu.map((item) => (
              <li
                key={item?.link}
                className={`${
                  item?.isMobileOnly && "sm:hidden"
                } last:bg-!border-none md:border-r-[2px] border-r-gray-300 dark:border-r-gray-700`}
              >
                <Link
                  href={item?.link}
                  className={`flex w-fit h-6 justify-center items-center px-6 lg:px-8 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 dark:text-gray-200
              ${
                pathname === item?.link &&
                "text-gray-950 dark:text-gray-50 underline"
              }`}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
          {isLoading ? (
            <Spinner className="success" />
          ) : (
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <Link
                href="/cart"
                className=" w-9 h-8 bg-emerald-500 dark:bg-emerald-600 text-white py-1 px-2 rounded-md relative hover:bg-emerald-600 dark:hover:bg-emerald-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <RiShoppingCart2Fill className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 dark:bg-red-700 rounded-full h-5 min-w-5 text-center text-sm">
                  {cartQuantity}
                </span>
              </Link>
              <ThemeToggle />
              {user ? (
                <Dropdown placement="bottom-end">
                  <DropdownTrigger as="button">
                    <button className="bg-zinc-200 dark:bg-zinc-800 !border-zinc-500 dark:!border-gray-500 text-gray-600 dark:text-gray-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 border-2 font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                      <span>{user?.username.charAt(0).toUpperCase()}</span>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <Link href="/profile">
                        <p className="font-semibold mb-2">{user?.username}</p>
                        <p className="opacity-70">{user?.email}</p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={handleLogout}
                      className="text-red-500 mt-2"
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <AuthModal />
              )}
            </div>
          )}
        </div>
        <ul
          className={`sm:hidden ${
            !isMenuOpen && "!h-0 top-0 !py-0"
          } transition-height duration-400 z-40 px-6 fixed overflow-y-auto flex max-w-full top-16 inset-x-0 bottom-0 w-screen flex-col backdrop-blur-sm backdrop-saturate-150 bg-background/95 pt-8 gap-5 h-lvh`}
        >
          {navBarMenu.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="flex items-center justify-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              <Link
                className={`w-full border-r-gray-300 dark:border-r-gray-700 hover:font-semibold ${
                  pathname === item?.link &&
                  "text-gray-950 dark:text-gray-50 underline underline-offset-4"
                }`}
                href={item.link}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </ul>
      </div>
    </Navbar>
  );
}

export default NavBar;
