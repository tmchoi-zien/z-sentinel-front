import { LEVEL } from "@/constants/common";
import { capitalizeFirstLetter } from "@/utils/common";

const bgColor = {
  critical: "bg-critical",
  high: "bg-high",
  medium: "bg-medium",
  low: "bg-low",
};

interface Props {
  level: (typeof LEVEL)[number];
}

export default function LevelTag({ level }: Props) {
  return (
    <div
      className={`
      flex justify-center items-center w-[64px] h-[22px] rounded-md
      ${bgColor[level]}
    `}
    >
      <span className="text-xs">{capitalizeFirstLetter(level)}</span>
    </div>
  );
}
