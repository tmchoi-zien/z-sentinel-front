import { format } from "date-fns";

import {
  HomeAlertType,
  HomeDeviceType,
  HomeHighRiskDevcieType,
  HomeLevelType,
  HomeSecurityAlertType,
  HomeVulnsType,
  HomeWeakDeviceType,
} from "@/types/api";

interface Props {
  devices: HomeDeviceType[];
  level: HomeLevelType[];
  highRiskDevices: HomeHighRiskDevcieType[];
  alertsThisWeek: HomeAlertType[];
  weakDevices: HomeWeakDeviceType[];
  vulns: HomeVulnsType[];
  securityAlerts: HomeSecurityAlertType[];
  alerts: HomeAlertType[];
}
export default function homeDto({
  devices,
  level,
  highRiskDevices,
  alertsThisWeek,
  weakDevices,
  vulns,
  securityAlerts,
  alerts,
}: Props) {
  return {
    devices: {
      total: devices.length,
      connected: devices.filter((item) => item.isConnected).length,
      disconnected: devices.filter((item) => !item.isConnected).length,
    },
    level: level[0]?.overallRisk,
    highRiskDevices: highRiskDevices.length,
    alertsThisWeek: alertsThisWeek.length,
    weakDevices: weakDevices
      .filter((item, idx) => idx < 5)
      .map((item) => ({
        model: item.model,
        vulnerabilityCategory: item.vulnerabilityCategory.toLowerCase(),
      })),
    vulns: vulns
      .filter((item, idx) => idx < 5)
      .map((item) => ({
        name: item.name,
        count: item.count,
        // vulnerabilityCategory: item.vulnerabilityCategory,
      })),
    securityAlerts: securityAlerts
      .filter((item, idx) => idx < 5)
      .map((item) => ({
        model: item.model,
        alertFrequency: item.alertFrequency,
        alertCategory: item.alertCategory.toLowerCase(),
      })),
    alerts: alerts
      .sort((prev, curr) => {
        if (prev.created < curr.created) return 1;
        if (prev.created > curr.created) return -1;
        else return 0;
      })
      .filter((item, index) => index < 4)
      .map((item) => ({
        id: item.id,
        name: item.name,
        sourceIp: item.sourceIp,
        destinationIp: item.destinationIp,
        created: format(new Date(item.created), "yyyy.MM.dd"),
      })),
  };
}
