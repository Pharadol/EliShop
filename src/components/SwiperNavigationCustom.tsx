import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "../styles/components/swiperNavigation.css";

function SwiperNavigationCustom() {
  const swiper = useSwiper();

  return (
    <div className="navigation-swiper-wrapper">
      <button onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack className="arrow prev" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <IoIosArrowForward className="arrow next" />
      </button>
    </div>
  );
}

export default SwiperNavigationCustom;
