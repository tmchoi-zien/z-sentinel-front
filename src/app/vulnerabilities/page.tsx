"use client";
import { Suspense, useState } from "react";

import * as TEXT from "@/locale/ko/page.json";

import Tab from "@/components/commons/Tab";
import TabOverView from "./TabOverview";
import VulnsOverviewSkeleton from "@/components/skeletons/VulnsOverviewSkeleton";
import TabVulnerabilities from "./TabVulnerabilities";

const m = TEXT["vulnerabilities"];

export default function Vulnerabilities() {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="flex flex-col gap-[30px]">
      <Tab items={m["tab"]} tab={tab} setTab={setTab} />

      {/* TAB: Overview */}
      {tab === 0 && (
        <Suspense fallback={<VulnsOverviewSkeleton />}>
          <TabOverView />
        </Suspense>
      )}
      {tab === 1 && (
        <Suspense fallback={<>Vulnerabilities loading...</>}>
          <TabVulnerabilities />
        </Suspense>
      )}
    </div>
  );
}
