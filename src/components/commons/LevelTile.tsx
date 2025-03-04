import { LEVEL } from "@/constants/common";
import { capitalizeFirstLetter } from "@/utils/common";

interface Props {
  level: (typeof LEVEL)[number];
  count: number;
}

const BG_URL = {
  critical: "bg-[url('/images/bg_critical.png')]",
  high: "bg-[url('/images/bg_high.png')]",
  medium: "bg-[url('/images/bg_medium.png')]",
  low: "bg-[url('/images/bg_low.png')]",
  na: "",
};

export default function LevelTile({ level, count }: Props) {
  return (
    <div
      className={`${BG_URL[level]} bg-cover bg-center bg-no-repeat min-w-[150px] w-full rounded-[10px]`}
    >
      <div className="flex flex-col py-[10px] px-[15px]">
        <span className="text-[16px] font-bold">
          {capitalizeFirstLetter(level)}
        </span>
        <span className="text-[30px] font-bold">{count}</span>
      </div>
    </div>
  );
}
