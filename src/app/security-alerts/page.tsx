"use client";

import TopologyGraph from "@/components/commons/TopologyGraph";
import * as TEXT from "@/locale/ko/page.json";

const t = TEXT["security-alerts"];

export default function SecurityAlerts() {
  return (
    <>
      {t["title"]}
      <TopologyGraph />
    </>
  );
}
