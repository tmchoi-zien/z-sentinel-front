import { LEVEL } from "@/constants/common";
import LevelTag from "./LevelTag";

interface Props {
  deviceName: string;
  alerts: number;
  severity: (typeof LEVEL)[number];
}

export default function SecurityAlertsItem({
  deviceName,
  alerts,
  severity,
}: Props) {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[36px] text-xs">
      <div className="flex flex-3 justify-center w-full">{deviceName}</div>
      <div className="flex flex-1 justify-center w-full">{alerts}</div>
      <div className="flex flex-2 justify-center w-full">
        <LevelTag level={severity} />
      </div>
    </div>
  );
}
