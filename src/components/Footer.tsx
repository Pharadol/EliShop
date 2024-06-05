import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/assets/images/EliShopLogo.png";
import { footer } from "@/assets/data/footer";

function Footer() {
  return (
    <div className="bg-white dark:bg-zinc-800 mt-auto px-4 border-t-[1px] dark:border-zinc-700">
      <Container className="!pb-6">
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-16 pb-8 pt-4 sm:pt-0 border-b-[1px] dark:border-zinc-700">
          <div>
            <Image src={logo} alt="logo image" className="w-20" />
            <p className="mt-2 dark:text-zinc-300">{footer.slogan}</p>
          </div>
          <div className="grid grid-cols-2 gap-y-8 sm:flex justify-between lg:w-[60%]">
            {footer.info.map((item) => (
              <div key={item.title}>
                <p className="font-semibold mb-3">{item.title}</p>
                <ul className="flex flex-col gap-y-2 dark:text-zinc-300">
                  {item.list.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm dark:text-zinc-400">{footer.copyRight}</p>
      </Container>
    </div>
  );
}

export default Footer;
