import { LEVEL } from "@/constants/common";
import { capitalizeFirstLetter } from "@/utils/common";

interface Props {
  level: (typeof LEVEL)[number];
}

const BG_COLOR = {
  critical: "bg-critical",
  high: "bg-high",
  medium: "bg-medium",
  low: "bg-low",
  na: "bg-na",
};

export default function LevelTag({ level }: Props) {
  return (
    <div
      className={`
        flex justify-center items-center w-[64px] h-[22px] rounded-md
        ${BG_COLOR[level]} 
      `}
    >
      <span className="text-xs">{capitalizeFirstLetter(level)}</span>
    </div>
  );
}
