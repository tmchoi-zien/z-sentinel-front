import Skeleton from "./Skeleton";

export default function VulnsOverviewSkeleton() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap=[30px]">
        <Skeleton className="flex-1 min-h-[150px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[150px] bg-box-color" />
        <Skeleton className="flex-2 min-h-[150px] bg-box-color" />
      </div>
      <div className="flex flex-row gap=[30px]">
        <Skeleton className="flex-3 min-h-[280px] bg-box-color" />
        <Skeleton className="flex-2 min-h-[280px] bg-box-color" />
      </div>
      <div className="flex flex-row gap=[30px]">
        <Skeleton className="flex-1 min-h-[280px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[280px] bg-box-color" />
        <Skeleton className="flex-1 min-h-[280px] bg-box-color" />
      </div>
    </div>
  );
}
