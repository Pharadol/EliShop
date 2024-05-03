const navMenu:Menu[] = [
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
  {
    title: "Wish List",
    link: "/wish-list",
  },
]

interface Menu {
  title: string;
  link:string
}

export { navMenu }