import Skeleton from "./Skeleton";

export default function SecurityAlertsGraphSkeleton() {
  return (
    <div className="flex flex-col gap-[10px]">
      <Skeleton className="w-full h-[500px] bg-box-color rounded-[10px]" />
      <Skeleton className="w-full h-[80px] bg-box-color rounded-[10px]" />
    </div>
  );
}
