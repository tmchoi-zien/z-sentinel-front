import Skeleton from "@/components/skeletons/Skeleton";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[30px]">
        <Skeleton className="flex-1 min-h-[120px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[120px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[120px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[120px] bg-box-color" />
      </div>
      <div className="flex flex-row gap-[30px]">
        <Skeleton className="flex-1 min-h-[300px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[300px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[300px] bg-box-color" />
      </div>
      <div className="flex flex-row gap-[30px]">
        <Skeleton className="flex-1 min-h-[350px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[350px] bg-box-color" />
      </div>
    </div>
  );
}
