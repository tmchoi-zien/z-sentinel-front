import { LEVEL } from "@/constants/common";
import LevelTag from "./LevelTag";

interface Props {
  deviceName: string;
  level: (typeof LEVEL)[number];
}

export default function WeakDeviceItem({ deviceName, level }: Props) {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[36px] text-xs">
      <div className="flex justify-center w-full">{deviceName}</div>
      <div className="flex justify-center w-full">
        <LevelTag level={level} />
      </div>
    </div>
  );
}
