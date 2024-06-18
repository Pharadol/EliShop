import SkeletonProductCard from "./SkeletonProductCard";
function SkeletonProductCarousel() {
  const skeletonCards = [
    { id: 1 },
    { id: 2 },
    { id: 3, className: "hidden sm:block" },
    { id: 4, className: "hidden lg:block" },
  ];
  return (
    <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full ">
      {skeletonCards.map((card) => (
        <SkeletonProductCard key={card.id} className={card.className} />
      ))}
    </ul>
  );
}

export default SkeletonProductCarousel;
