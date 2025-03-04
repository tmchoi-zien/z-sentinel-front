"use client";
import * as TEXT from "@/locale/ko/page.json";
import HomeLogic from "./logic";
import HomeSkeleton from "../../components/skeletons/HomeSkeleton";

import { LEVEL } from "@/constants/common";
import Box from "@/components/commons/Box";
import AtomIcon from "@/components/icons/AtomIcon";
import RiskIcon from "@/components/icons/RiskIcon";
import AlertIcon from "@/components/icons/AlertIcon";
import DonutChart from "@/components/commons/DonutChart";
import DeviceIcon from "@/components/icons/DevicesIcon";
import WeakDeviceItem from "@/components/commons/WeakDeviceItem";
import SecurityAlertsItem from "@/components/commons/SecurityAlertsItem";
import VulnerabilitiesItem from "@/components/commons/VulnerabilitiesItem";
import SecurityAlertsListItem from "@/components/commons/SecurityAlertsListItem";

const m = TEXT["home"];

export default function Home() {
  const data = HomeLogic();
  if (!data) return <HomeSkeleton />;

  const {
    devices,
    level,
    highRiskDevices,
    alertsThisWeek,
    weakDevices,
    vulns,
    securityAlerts,
    alerts,
  } = data;

  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[30px]">
        {/* Devices */}
        <Box className="flex-1 flex flex-row gap-[25px] min-h-[120px]">
          <DeviceIcon className="min-w-[60px]" type="dashboard" />
          <div className="flex flex-col justify-center">
            <span className="text-3xl font-bold">{devices.total}</span>
            <span className="text-base">{m["devices"]}</span>
          </div>
          <div className="flex justify-end w-full">
            <ul className="flex flex-col gap-[10px] mt-[10px]">
              <li className="text-xs">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
                {devices.connected} {m["connected"]}
              </li>
              <li className="text-xs">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2" />
                {devices.disconnected} {m["disconnected"]}
              </li>
            </ul>
          </div>
        </Box>

        {/* Security Level Assessment */}
        <Box className="flex-1 flex flex-row gap-[25px]">
          <AtomIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">{level}</span>
            <span>{m["level"]}</span>
          </div>
        </Box>

        {/* High Risk Devices */}
        <Box className="flex-1 flex flex-row gap-[25px]">
          <RiskIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">{highRiskDevices}</span>
            <span>{m["high-risk-device"]}</span>
          </div>
        </Box>

        {/* Security Alerts */}
        <Box className="flex-1 flex flex-row gap-[25px]">
          <AlertIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">{alertsThisWeek}</span>
            <span>{m["security-alerts"]}</span>
          </div>
        </Box>
      </div>

      <div className="flex flex-row flex-grow gap-[30px]">
        {/* Top 5 Weak Device */}
        <Box title={m["weak-device"]} className="flex-1">
          <div className="flex flex-col justify-center items-start">
            {/* columns */}
            <div className="flex flex-row justify-between w-full text-[11px] text-[#999999] mb-[15px]">
              <div className="flex justify-center w-full">
                {m["weak-device-columns"][0]}
              </div>
              <div className="flex justify-center w-full">
                {m["weak-device-columns"][1]}
              </div>
            </div>
            {/* data */}
            {weakDevices.map((item) => (
              <WeakDeviceItem
                key={item.model}
                deviceName={item.model}
                level={item.vulnerabilityCategory as (typeof LEVEL)[number]}
              />
            ))}
          </div>
        </Box>

        {/* Top 5 Vulnerabilities */}
        <Box title={m["vulns"]} className="flex-1">
          <div className="flex flex-col justify-center items-start">
            {/* columns */}
            <div className="flex flex-row justify-between w-full text-[11px] text-[#999999] mb-[15px]">
              <div className="flex flex-3 justify-center w-full">
                {m["vulns-columns"][0]}
              </div>
              <div className="flex flex-2 justify-center w-full">
                {m["vulns-columns"][1]}
              </div>
              <div className="flex flex-1 justify-center w-full">
                {m["vulns-columns"][2]}
              </div>
              <div className="flex flex-3 justify-center w-full"></div>
            </div>
            {/* data */}
            {vulns.map((item) => (
              <VulnerabilitiesItem
                key={item.name}
                vulnName={item.name}
                level={"high"}
                total={item.count}
                value={item.count}
                ratio={[3, 2, 1, 3]}
                className={"min-h-[36px]"}
              />
            ))}
          </div>
        </Box>

        {/* Top 5 Security Alerts */}
        <Box title={m["security-alerts"]} className="flex-1">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-center items-start">
              {/* columns */}
              <div className="flex flex-row justify-between w-full text-[11px] text-[#999999] mb-[15px]">
                <div className="flex-3 flex justify-center w-full">
                  {m["security-alerts-columns"][0]}
                </div>
                <div className="flex-1 flex justify-center w-full">
                  {m["security-alerts-columns"][1]}
                </div>
                <div className="flex-2 flex justify-center w-full">
                  {m["security-alerts-columns"][2]}
                </div>
              </div>
              {/* data */}
              {securityAlerts.map((item) => (
                <SecurityAlertsItem
                  key={item.model}
                  deviceName={item.model}
                  alerts={item.alertFrequency}
                  severity={item.alertCategory as (typeof LEVEL)[number]}
                />
              ))}
            </div>
            {/* graph */}
            <div className="flex-4 flex justify-center items-center w-full">
              <DonutChart
                width={120}
                height={120}
                innerRadius={45}
                outerRadius={60}
                data={securityAlerts.map((item) => ({
                  name: item.model,
                  value: item.alertFrequency,
                }))}
              />
            </div>
          </div>
        </Box>
      </div>
      <div className="flex flex-row gap-[30px]">
        {/* LIST: Security Alerts */}
        <Box
          title={m["list-security-alerts"]}
          className="flex flex-col gap-[10px]"
        >
          {alerts.map((item) => (
            <SecurityAlertsListItem
              key={item.id}
              alertName={item.name}
              edgeInfo={{ from: item.sourceIp, to: item.destinationIp }}
              date={item.created}
            />
          ))}
        </Box>
        {/* GRAPH: Security Alerts */}
        <Box title={m["graph-security-alerts"]} className="min-h-[335px]">
          {""}
        </Box>
      </div>
    </div>
  );
}
