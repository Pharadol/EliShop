import BannerSwiper from "@/components/BannerSwiper";
import HomeCarouselSection from "@/components/home/HomeCarouselSection";
import FirstShopNowSection from "@/components/home/FirstShopNowSection";
import SecondShopNowSection from "@/components/home/SecondShopNowSection";

async function HomePage() {
  return (
    <>
      <h1 className="absolute w-px h-px m-[-1px] p-0 border-0 overflow-hidden clip-rect(0, 0, 0, 0) whitespace-nowrap;">
        Elishop - Your Go-To Marketplace
      </h1>
      <BannerSwiper />
      <HomeCarouselSection title="Best Seller" tag="best-seller" />
      <FirstShopNowSection />
      <HomeCarouselSection title="Recommend" tag="recommend" />
      <SecondShopNowSection />
      <HomeCarouselSection title="Sale" tag="sale" />
    </>
  );
}

export default HomePage;
