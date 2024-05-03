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
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slices/authSlice";
import { navMenu } from "@/assets/data/navMenu";

function NavBar() {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<CurrentUser | null>(null);

  const navBarMenu = navMenu;

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    window.location.href = "/";
  };

  return (
    <Navbar
      shouldHideOnScroll
      className="w-full h-20 bg-white dark:bg-zinc-900 border-b-[1px] border-b-gray-300 dark:border-b-zinc-800"
    >
      <div className="h-full w-full max-w-screen-xl mx-auto xl:px-0 flex items-center justify-between gap-2">
        <div className="flex justify-center items-center gap-2">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden pb-1"
          />
          <NavbarBrand>
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
                className=" last:bg-!border-none md:border-r-[2px] border-r-gray-300 dark:border-r-gray-700"
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
          <ThemeToggle />
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger as="button">
                <button className="bg-emerald-200 dark:bg-zinc-800 !border-emerald-500 dark:!border-gray-500 text-emerald-600 dark:text-gray-300 hover:bg-emerald-300 dark:hover:bg-zinc-700 border-[1px] font-semibold rounded-full w-10 h-10 flex justify-center items-center">
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
        <NavbarMenu className="pt-8 gap-5">
          {navBarMenu.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full border-r-gray-300 dark:border-r-gray-700 hover:font-semibold 
                ${
                  pathname === item?.link &&
                  "text-gray-950 dark:text-gray-50 underline"
                }
                `}
                href={item.link}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

export default NavBar;