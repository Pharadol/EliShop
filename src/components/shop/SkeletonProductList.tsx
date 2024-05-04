import SkeletonProductCard from "../skeleton/SkeletonProductCard";
function SkeletonProductList() {
  const skeletonItems = Array.from({ length: 15 });

  return (
    <ol className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
      {skeletonItems.map((_, index) => (
        <li
          key={index}
          className="group border-[1px] border-zinc-200 dark:border-zinc-800 rounded-md  transition-all duration-200"
        >
          <SkeletonProductCard />
        </li>
      ))}
    </ol>
  );
}

export default SkeletonProductList;
