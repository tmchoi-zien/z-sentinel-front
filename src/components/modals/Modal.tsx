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
    <>
      <div
        className={`${SIZE[size]} h-full max-h-full fixed top-0 right-0 bg-white p-[32px] z-20 overflow-y-scroll scrollbar-hide`}
      >
        <div
          className="absolute top-[36px] right-[32px] w-[px24] h-[24px] flex items-center justify-center z-10 cursor-pointer"
          onClick={onClose}
        >
          <Image
            src="/icons/icon_close_black.svg"
            alt="close"
            width={13}
            height={13}
          />
        </div>
        {children}
      </div>
      <div
        className="fixed w-full h-full top-0 left-0 z-10 bg-black/50"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />
    </>
  );
}
