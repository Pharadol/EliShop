import BannerSwiper from "@/components/BannerSwiper";
import SwiperTemplate from "../components/SwiperTemplate";

import { banners } from "@/assets/data/banners";
import Image from "next/image";

async function HomePage() {
  return (
    <div>
      <BannerSwiper />
      {/* <SwiperTemplate /> */}
    </div>
  );
}

export default HomePage;
