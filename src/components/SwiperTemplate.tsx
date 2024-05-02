"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { banners } from "@/assets/data/banners";
import Link from "next/link";
import Image from "next/image";

type SwiperOptionType = SwiperOptions & {
  pagination?: { type: string; clickable: boolean };
  modules?: any[];
  autoplay?: { delay: number; disableOnInteraction: boolean };
};

function SwiperTemplate() {
  const itemss = [{ title: "s" }];
  const swiperSettings: SwiperOptionType = {
    navigation: true,
    pagination: { type: "bullets", clickable: true },
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
  };
  return (
    <Swiper {...swiperSettings} className="h-auto w-full">
      {itemss.map((item, index) => (
        <SwiperSlide key={index}>
          <article>
            <div>
              <div>
                {item.title}
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperTemplate;
