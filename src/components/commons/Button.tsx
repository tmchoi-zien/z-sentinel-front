import React from "react";
import Image from "next/image";

export const TYPE = ["button", "submit"] as const;

export type ButtonType = (typeof TYPE)[number];

export interface ButtonProps {
  type?: ButtonType;
  text: string;
  icon?: string;
  isDisabled?: boolean;
  onClick?: () => void; //이미지 업로드 컴포넌트 예외 상황
}

export default function Button({
  type = "button",
  text,
  icon,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      data-testid="button"
      type={type}
      className={`
        inline-block py-[5px] px-[15px] rounded-xl text-[13px] text-white font-bold border-gray border-[1px]
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className="flex flex-row gap-[10px] items-center">
        <span>{text}</span>
        {icon && (
          <span>
            <Image src={icon} alt="icon" width="12" height="12" />
          </span>
        )}
      </div>
    </button>
  );
}
