import { LEVEL } from "@/constants/common";
import { capitalizeFirstLetter } from "@/utils/common";

interface Props {
  level: (typeof LEVEL)[number];
}

export default function LevelTag({ level }: Props) {
  const bgColor = `bg-${level}`;

  return (
    <div
      className={`
        flex justify-center items-center w-[64px] h-[22px] rounded-md
        ${bgColor} 
      `}
    >
      <span className="text-xs">{capitalizeFirstLetter(level)}</span>
    </div>
  );
}
