"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import {
  getHomeAlerts,
  getHomeDevices,
  getHomeDevicesHighRisk,
  getHomeScans,
  getHomeSecurityAlerts,
  getHomeVulns,
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
  ResponseType,
} from "@/types/api";

import { getErrorMessage } from "@/utils";
import homeDto from "@/dto/homeDto";

export default function HomeLogic() {
  const [week, setWeek] = useState<string>("this");

  // 디바이스 API
  const {
    data: devices,
    isLoading: devicesLoading,
    error: devicesError,
  } = useQuery<ResponseType<HomeDeviceType[]>, Error>(
    [`home-devices`],
    getHomeDevices,
  );

  // 위험 수준 API
  const {
    data: level,
    isLoading: levelLoading,
    error: levelError,
  } = useQuery<ResponseType<HomeLevelType[]>, Error>(
    [`home-level`],
    getHomeScans,
  );

  // High risk devices API
  const {
    data: highRiskDevices,
    isLoading: highRiskDevicesLoading,
    error: highRiskDevicesError,
  } = useQuery<ResponseType<HomeHighRiskDevcieType[]>, Error>(
    [`home-high-risk-devices`],
    getHomeDevicesHighRisk,
  );

  // Security alerts
  const {
    data: alertsThisWeek,
    isLoading: alertsThisWeekLoading,
    error: alertsThisWeekError,
  } = useQuery<ResponseType<HomeAlertType[]>, Error>(
    [`home-alerts-this-week`],
    () => getHomeAlerts({ week }),
  );

  // Top5 - Week deivces
  const {
    data: weakDevices,
    isLoading: weakDevicesLoading,
    error: weakDevicesError,
  } = useQuery<ResponseType<HomeWeakDeviceType[]>, Error>(
    [`home-weak-devices`],
    getHomeWeakDevices,
  );

  // Top5 - Vulnerabilities
  const {
    data: vulns,
    isLoading: vulnsLoading,
    error: vulnsError,
  } = useQuery<ResponseType<HomeVulnsType[]>, Error>(
    [`home-vulns`],
    getHomeVulns,
  );

  // Top5 - Security alerts
  const {
    data: securityAlerts,
    isLoading: securityLoading,
    error: securityError,
  } = useQuery<ResponseType<HomeSecurityAlertType[]>, Error>(
    [`home-security-alerts`],
    getHomeSecurityAlerts,
  );

  // Security alerts list
  const {
    data: alerts,
    isLoading: alertsLoading,
    error: alertsError,
  } = useQuery<ResponseType<HomeAlertType[]>, Error>([`home-alerts`], () =>
    getHomeAlerts(),
  );

  // Security alerts graph

  const dtoData = homeDto({
    devices: devices?.data || [],
    level: level?.data || [],
    highRiskDevices: highRiskDevices?.data || [],
    alertsThisWeek: alertsThisWeek?.data || [],
    weakDevices: weakDevices?.data || [],
    vulns: vulns?.data || [],
    securityAlerts: securityAlerts?.data || [],
    alerts: alerts?.data || [],
  });

  return {
    ...dtoData,
    isLoading:
      devicesLoading ||
      levelLoading ||
      highRiskDevicesLoading ||
      alertsThisWeekLoading ||
      weakDevicesLoading ||
      vulnsLoading ||
      securityLoading ||
      alertsLoading,
    error: getErrorMessage([
      devicesError,
      levelError,
      highRiskDevicesError,
      alertsThisWeekError,
      weakDevicesError,
      vulnsError,
      securityError,
      alertsError,
    ]),
  };
}
