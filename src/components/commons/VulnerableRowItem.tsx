interface Props {
  modelName: string;
  vulnerableDevice: number;
  uniqueVuln: number;
  color: string;
  ratio: number[];
}

export default function VulnerableRowItem({
  modelName,
  vulnerableDevice,
  uniqueVuln,
  color,
  ratio,
}: Props) {
  const flexRatio = ratio.map((item) => `flex-${item}`);
  const bgColor = `bg-${color}`;

  return (
    <div className="flex flex-row items-center justify-between gap-[15px] w-full min-h-[16px] text-xs">
      <div className={`${flexRatio[1]} flex-2 flex justify-start items-center`}>
        <span className={`inline-block w-2 h-2 ${bgColor} rounded-sm mr-2`} />
        <span>{modelName}</span>
      </div>
      <div className={`${flexRatio[1]} flex-1`}>{vulnerableDevice}</div>
      <div className={`${flexRatio[2]} flex-1`}>{uniqueVuln}</div>
    </div>
  );
}
