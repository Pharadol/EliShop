"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { banners } from "@/assets/data/banners";
import Link from "next/link";

function SwiperBanner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-auto w-full"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              href={item.link}
              className="flex h-40 w-full items-center justify-center sm:h-[298px] lg:h-[370px] xl:h-[525px] cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="block h-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperBanner;
