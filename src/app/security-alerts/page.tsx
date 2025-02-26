"use client";

import TopologyGraph from "@/components/commons/TopologyGraph";
import * as TEXT from "@/locale/ko/page.json";

const m = TEXT["security-alerts"];

export default function SecurityAlerts() {
  return (
    <>
      {m["title"]}
      <TopologyGraph />
    </>
  );
}
