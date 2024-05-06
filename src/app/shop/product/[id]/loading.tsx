import Container from "@/components/Container";
import { Skeleton } from "@nextui-org/react";

function loading() {
  return (
    <>
      <Container>
        <Skeleton className="rounded-lg">
          <div className="h-[400px] sm:h-[450px] w-full rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-6 p-3 flex flex-col justify-between mt-6">
          <div className="flex flex-col gap-y-6 mb-6">
            <Skeleton className="w-4/5 sm:w-2/5 rounded-lg">
              <div className="h-6 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-3/5 sm:w-1/5 rounded-lg">
              <div className="h-4 w-1/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-1/5 rounded-lg">
              <div className="h-4 w-1/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-1/5 rounded-lg">
              <div className="h-4 w-1/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Container>
    </>
  );
}

export default loading;
