import { Card, Skeleton } from "@nextui-org/react";

function SkeletonProductCard() {
  return (
    <>
      <Skeleton className="rounded-lg">
        <div className="h-[250px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 h-[144px] p-3 flex flex-col justify-between">
        <Skeleton className="w-5/5 rounded-lg">
          <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </>
  );
}

export default SkeletonProductCard;
