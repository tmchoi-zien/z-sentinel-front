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
      <div className="flex flex-3 justify-center">{deviceName}</div>
      <div className="flex flex-1 justify-center">{alerts}</div>
      <div className="flex flex-2 justify-center">
        <LevelTag level={severity} />
      </div>
    </div>
  );
}
