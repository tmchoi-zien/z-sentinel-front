"use client";
import { useQueries } from "react-query";

import {
  getHomeAlerts,
  getHomeDevices,
  getDevicesHighRisk,
  getHomeScans,
  getHomeSecurityAlerts,
  getVulnsTop5,
  getHomeWeakDevices,
} from "@/api";
import {
  HomeAlertType,
  HomeDeviceType,
  HomeHighRiskDevcieType,
  HomeLevelType,
  HomeSecurityAlertType,
  HomeVulnsType,
  HomeWeakDeviceType,
} from "@/types/api";

import homeDto from "@/dto/homeDto";

export default function HomeLogic() {
  // const [week, setWeek] = useState<string>("this");
  const week = "this" as const;

  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // ⏳ 2초 딜레이
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
      res.json(),
    );
  }

  const queries = useQueries([
    // 디바이스 API
    { queryKey: [`home-devices`], queryFn: getHomeDevices, suspense: true },
    // 위험 수준 API
    { queryKey: [`home-level`], queryFn: getHomeScans, suspense: true },
    // High risk devices API
    {
      queryKey: [`home-high-risk-devices`],
      queryFn: getDevicesHighRisk,
      suspense: true,
    },
    // Security alerts
    {
      queryKey: [`home-alerts-this-week`, week],
      queryFn: () => getHomeAlerts({ week }),
      suspense: true,
    },
    // Top5 - Week deivces
    {
      queryKey: [`home-weak-devices`],
      queryFn: getHomeWeakDevices,
      suspense: true,
    },
    // Top5 - Vulnerabilities
    { queryKey: [`home-vulns`], queryFn: getVulnsTop5, suspense: true },
    // Top5 - Security alerts
    {
      queryKey: [`home-security-alerts`],
      queryFn: getHomeSecurityAlerts,
      suspense: true,
    },
    // Security alerts list
    { queryKey: [`home-alerts`], queryFn: getHomeAlerts, suspense: true },
    // Security alerts graph
  ]);

  const isLoading = queries.some((item) => item.data === undefined);

  const dtoData = isLoading
    ? undefined
    : homeDto({
        devices: queries[0].data?.data as HomeDeviceType[],
        level: queries[1].data?.data as HomeLevelType[],
        highRiskDevices: queries[2].data?.data as HomeHighRiskDevcieType[],
        alertsThisWeek: queries[3].data?.data as HomeAlertType[],
        weakDevices: queries[4].data?.data as HomeWeakDeviceType[],
        vulns: queries[5].data?.data as HomeVulnsType[],
        securityAlerts: queries[6].data?.data as HomeSecurityAlertType[],
        alerts: queries[7].data?.data as HomeAlertType[],
      });

  return dtoData;
}
