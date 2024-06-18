import BannerSwiper from "@/components/BannerSwiper";
import HomeCarouselSection from "@/components/home/HomeCarouselSection";
import Container from "@/components/Container";

async function HomePage() {

  return (
    <div>
      <BannerSwiper />
      <Container>
        <HomeCarouselSection title="Best Seller" tag="best-seller" />
        <HomeCarouselSection title="Recommend" tag="recommend" />
        <HomeCarouselSection title="Sale" tag="sale" />
      </Container>
    </div>
  );
}

export default HomePage;
