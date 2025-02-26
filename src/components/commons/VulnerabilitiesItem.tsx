import { LEVEL } from "@/constants/common";
import LevelTag from "./LevelTag";
import ProgressBar from "./ProgressBar";

interface Props {
  vulnName: string;
  level: (typeof LEVEL)[number];
  total: number;
  value: number;
  ratio: number[];
  minHeight?: number;
}

export default function VulnerabilitiesItem({
  vulnName,
  level,
  total,
  value,
  ratio,
  minHeight = 36,
}: Props) {
  const flexRatio = ratio.map((item) => `flex-${item}`);
  const minY = `min-h-[${minHeight}px]`;

  return (
    <div
      className={`
      flex flex-row items-center justify-between w-full text-xs
      ${minY}
    `}
    >
      <div className={`${flexRatio[0]} flex justify-center`}>{vulnName}</div>
      <div className={`${flexRatio[1]} flex justify-center`}>
        <LevelTag level={level} />
      </div>
      <div className={`${flexRatio[2]} flex justify-center`}>{total}</div>
      <div className={`${flexRatio[3]} flex justify-center`}>
        <ProgressBar value={value} />
      </div>
    </div>
  );
}
