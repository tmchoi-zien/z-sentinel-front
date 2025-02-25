import { LEVEL } from "@/constants/common";
import LevelTag from "./LevelTag";
import ProgressBar from "./ProgressBar";

interface Props {
  vulnName: string;
  level: (typeof LEVEL)[number];
  total: number;
  value: number;
}

export default function VulnerabilitiesItem({
  vulnName,
  level,
  total,
  value,
}: Props) {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[36px] text-xs">
      <div className="flex flex-3 justify-center w-full">{vulnName}</div>
      <div className="flex flex-2 justify-center w-full">
        <LevelTag level={level} />
      </div>
      <div className="flex flex-1 justify-center w-full">{total}</div>
      <div className="flex flex-3 justify-center w-full">
        <ProgressBar value={value} />
      </div>
    </div>
  );
}
