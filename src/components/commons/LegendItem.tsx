import { LEVEL } from "@/constants/common";

interface Props {
  level: (typeof LEVEL)[number];
  value: number;
}

export default function LegendItem({ level, value }: Props) {
  const color = `bg-${level}`;
  return (
    <div className="flex flex-row gap-[10px] justify-between w-[120px]">
      <div className="flex flex-row gap-[10px] items-center justify-center">
        <span className={`inline-block w-3 h-3 ${color} rounded-sm mr-2`} />
        <span className="text-xs">{level}</span>
      </div>
      <span className="text-[13px] font-bold">{value}</span>
    </div>
  );
}
