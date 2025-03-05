"use client";
import { Suspense, useState } from "react";
import * as TEXT from "@/locale/ko/page.json";

import Tab from "@/components/commons/Tab";
import TabGraph from "./TabGraph";
import TabSecurityAlerts from "./TabSecurityAlerts";
import SecurityAlertsGraphSkeleton from "@/components/skeletons/SecurityAlertsGraphSkeleton";

const m = TEXT["security-alerts"];

export default function SecurityAlerts() {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="flex flex-col gap-[30px]">
      <Tab items={m["tab"]} tab={tab} setTab={setTab} />

      {/* TAB: Overview */}
      {tab === 0 && (
        <Suspense fallback={<SecurityAlertsGraphSkeleton />}>
          <TabGraph />
        </Suspense>
      )}
      {tab === 1 && (
        <Suspense fallback={<>Vulnerabilities loading...</>}>
          <TabSecurityAlerts />
        </Suspense>
      )}
    </div>
  );
}
