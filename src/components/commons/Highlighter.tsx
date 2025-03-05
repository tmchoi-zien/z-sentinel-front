import { ReactNode } from "react";

interface Props {
  value: string | number | ReactNode;
  color?: keyof typeof BG_COLOR;
  className?: string;
}

const BG_COLOR = {
  red: "bg-[#F74643]",
  default: "bg-[#7209B7]",
};

export default function Highlighter({
  value,
  color = "default",
  className,
}: Props) {
  return (
    <div
      className={`
        ${BG_COLOR[color]} inline-block py-[3px] px-[10px] rounded-md
        ${className ? className : ""}
      `}
    >
      {value}
    </div>
  );
}
