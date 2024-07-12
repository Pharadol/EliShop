import SkeletonProductCard from "../skeleton/SkeletonProductCard";
function SkeletonProductList() {
  const skeletonItems = Array.from({ length: 15 });

  return (
    <ol className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
      {skeletonItems.map((_, index) => (
        <SkeletonProductCard key={index} />
      ))}
    </ol>
  );
}

export default SkeletonProductList;
