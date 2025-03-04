import Image from "next/image";
import Skeleton from "./Skeleton";

export default function VulnsDetailSkeleton() {
  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-background min-h-screen py-20 scrollbar-hide">
      <div className={`w-[600px] relative bg-[#0e131f] rounded-[30px]`}>
        {/* 닫기 버튼 */}
        <div className="absolute right-4 top-4 z-10 cursor-pointer pointer-events-auto">
          <Image
            src="/icons/close_white.svg"
            alt="close"
            width={24}
            height={24}
          />
        </div>

        {/* 컨텐츠 영역 */}
        <div className="flex flex-col gap-[30px] px-[40px] py-[30px]">
          <Skeleton className="h-[64px] bg-[#151A26]" />
          <Skeleton className="h-[52px] bg-[#151A26]" />
          <Skeleton className="h-[30px] bg-[#151A26]" />
          <Skeleton className="h-[250px] bg-[#151A26]" />
          <Skeleton className="h-[250px] bg-[#151A26]" />
          <Skeleton className="h-[250px] bg-[#151A26]" />
        </div>
      </div>
    </div>
  );
}
