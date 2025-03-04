import { COLOR_BY_RANK } from "@/constants/common";

interface Props {
  modelName: string;
  vulnerableDevice: number;
  uniqueVuln: number;
  rank: keyof typeof COLOR_BY_RANK;
  ratio: number[];
}

export default function VulnerableRowItem({
  modelName,
  vulnerableDevice,
  uniqueVuln,
  rank,
  ratio,
}: Props) {
  const flexRatio = ratio.map((item) => `flex-${item}`);

  return (
    <div className="flex flex-row items-center justify-between gap-[15px] w-full min-h-[16px] text-xs">
      <div className={`${flexRatio[1]} flex-2 flex justify-start items-center`}>
        <span
          className={`inline-block w-2 h-2 ${COLOR_BY_RANK[rank]} rounded-sm mr-2`}
        />
        <span>{modelName}</span>
      </div>
      <div className={`${flexRatio[1]} flex-1`}>{vulnerableDevice}</div>
      <div className={`${flexRatio[2]} flex-1`}>{uniqueVuln}</div>
    </div>
  );
}
