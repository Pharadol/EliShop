"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Product } from "@/model/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductCard from "../ProductCard";
import SwiperNavigationCustom from "../SwiperNavigationCustom";

interface Props {
  items: Product[];
}
function ProductCarousel({ items }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={12}
      breakpoints={{
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="relative"
    >
      {items.map((item) => (
        <SwiperSlide
          key={item.id}
          className="!flex justify-center items-center"
        >
          <ProductCard product={item}></ProductCard>
        </SwiperSlide>
      ))}
      <SwiperNavigationCustom />
    </Swiper>
  );
}

export default ProductCarousel;
