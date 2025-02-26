"use client";
import { useEffect } from "react";

import * as TEXT from "@/locale/ko/page.json";
import HomeLogic from "./logic";
import DragableButton from "@/components/commons/DragableButton";

const m = TEXT["home"];

export default function Home() {
  const {
    devices,
    level,
    highRiskDevices,
    alertsThisWeek,
    weakDevices,
    vulns,
    securityAlerts,
    alerts,
    isLoading,
    error,
  } = HomeLogic();

  useEffect(() => {
    if (!isLoading) {
      console.log("devices::", devices);
      console.log("level::", level);
      console.log("high risk devices::", highRiskDevices);
      console.log("alerts this week::", alertsThisWeek);
      console.log("weak devices::", weakDevices);
      console.log("vulns::", vulns);
      console.log("security alerts::", securityAlerts);
      console.log("alerts::", alerts);
    }
  }, [isLoading]);

  return (
    <>
      <div>{m["title"]}</div>
      <DragableButton />
    </>
  );
}
