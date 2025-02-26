import React from "react";
import Image from "next/image";

const SIZE = {
  md: "w-[600px]",
  lg: "w-[800px]",
};

export type SizeType = keyof typeof SIZE;

export interface Props {
  children: React.ReactNode;
  size: SizeType;
  onClose: () => void;
}
export default function Modal({ size, children, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-background min-h-screen py-20 scrollbar-hide"
      onClick={onClose}
    >
      <div className={`${SIZE[size]} relative bg-[#0e131f] rounded-[30px]`}>
        {/* 닫기 버튼 */}
        <div
          className="absolute right-4 top-4 z-10 cursor-pointer pointer-events-auto"
          onClick={onClose}
        >
          <Image
            src="/icons/close_white.svg"
            alt="close"
            width={24}
            height={24}
          />
        </div>

        {/* 컨텐츠 영역 */}
        <div
          className="px-[40px] py-[30px]"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
