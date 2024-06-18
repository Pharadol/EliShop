import React from "react";
import Image from "next/image";
import productImage from "../../assets/images/section/GroupProduct.png";
import Link from "next/link";
function FirstShopNowSection() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800">
      <div className="flex flex-col sm:flex-row items-center px-3 py-6 sm:py-12 mx-auto max-w-screen-xl gap-x-12">
        <Image
          src={productImage}
          alt="logo image"
          className="w-[200px] md:w-[300px] lg:w-[450px]"
        />
        <div className="flex flex-col items-center gap-y-3 sm:gap-y-4 sm:items-start">
          <h2 className="font-semibold text-xl md:text-3xl w-fit my-1">
            Empower Your Digital World.
          </h2>
          <p className="dark:text-zinc-300 indent-4 max-w-[700px] sm:indent-0">
            Explore our range of IT products designed to enhance your everyday
            life. With exceptional performance and cutting-edge features, our
            technology meets all your digital needs.
          </p>
          <Link
            href={"/shop"}
            className="px-10 py-2 rounded-md bg-zinc-800 dark:bg-zinc-600 text-white hover:opacity-80"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FirstShopNowSection;
