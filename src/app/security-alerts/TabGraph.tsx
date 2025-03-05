import * as TEXT from "@/locale/ko/page.json";
import { GraphLogic } from "./logic";

import PCIcon from "@/components/icons/PCIcon";
import TVIcon from "@/components/icons/TVIcon";
import NVRIcon from "@/components/icons/NVRIcon";
import ModemIcon from "@/components/icons/ModelIcon";
import RouterIcon from "@/components/icons/RouterIcon";
import IpCameraIcon from "@/components/icons/IpCameraIcon";
import TopologyGraph from "@/components/commons/TopologyGraph";
import SecurityAlertsGraphSkeleton from "@/components/skeletons/SecurityAlertsGraphSkeleton";

const m = TEXT["security-alerts"];

interface Props {}

export default function TabGraph({}: Props) {
  const alerts = GraphLogic();
  if (!alerts) return <SecurityAlertsGraphSkeleton />;

  return (
    <div>
      <TopologyGraph
        nodes={alerts.nodes}
        edges={alerts.edges}
        className="h-[600px]"
        // className="h-[600px] border border-red-100"
      />
      <div className="flex flex-row justify-center gap-[10px]">
        {/* Legend: Type */}
        <div className="flex flex-row gap-[32px] py-[16px] px-[28px] rounded-[10px] bg-box-color">
          <div className="flex flex-row gap-[10px] items-center">
            <IpCameraIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][0]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <ModemIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][1]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <PCIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][2]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <TVIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][3]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <NVRIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][4]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <RouterIcon width={36} height={36} legend />
            <span className="text-[13px]">{m["legend"][5]}</span>
          </div>
        </div>

        {/* Legend: Online/Offline */}
        <div className="flex flex-row gap-[32px] items-center py-[16px] px-[28px] rounded-[10px] bg-box-color">
          <div className="flex flex-row gap-[10px] items-center">
            <span className="inline-block w-2 h-2 bg-[#7856FF] rounded-full mr-2" />
            <span className="text-[13px] text-[#7856FF]">{m["online"]}</span>
          </div>
          <div className="flex flex-row gap-[10px] items-center">
            <span className="inline-block w-2 h-2 bg-[#F74643] rounded-full mr-2" />
            <span className="text-[13px] text-[#F74643]">{m["offline"]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
