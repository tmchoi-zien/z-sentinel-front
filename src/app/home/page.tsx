"use client";
import { useEffect } from "react";

import * as TEXT from "@/locale/ko/page.json";
import HomeLogic from "./logic";
import DragableButton from "@/components/commons/DragableButton";

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
  // const {
  //   devices,
  //   level,
  //   highRiskDevices,
  //   alertsThisWeek,
  //   weakDevices,
  //   vulns,
  //   securityAlerts,
  //   alerts,
  //   isLoading,
  //   error,
  // } = HomeLogic();

  // useEffect(() => {
  //   if (!isLoading) {
  //     console.log("devices::", devices);
  //     console.log("level::", level);
  //     console.log("high risk devices::", highRiskDevices);
  //     console.log("alerts this week::", alertsThisWeek);
  //     console.log("weak devices::", weakDevices);
  //     console.log("vulns::", vulns);
  //     console.log("security alerts::", securityAlerts);
  //     console.log("alerts::", alerts);
  //   }
  // }, [isLoading]);

  // return (
  //   <>
  //     <div>{t["title"]}</div>
  //     <DragableButton />
  //   </>
  // );
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-row gap-[30px]">
        {/* Devices */}
        <Box className="flex flex-row gap-[25px]">
          <DeviceIcon className="min-w-[60px]" type="dashboard" />
          <div className="flex flex-col justify-center">
            <span className="text-3xl font-bold">26</span>
            <span className="text-base">{m["devices"]}</span>
          </div>
          <div className="flex justify-end w-full">
            <ul className="flex flex-col gap-[10px] mt-[10px]">
              <li className="text-xs">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
                10 {m["connected"]}
              </li>
              <li className="text-xs">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2" />
                15 {m["disconnected"]}
              </li>
            </ul>
          </div>
        </Box>

        {/* Security Level Assessment */}
        <Box className="flex flex-row gap-[25px]">
          <AtomIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">Medium</span>
            <span>{m["level"]}</span>
          </div>
        </Box>

        {/* High Risk Devices */}
        <Box className="flex flex-row gap-[25px]">
          <RiskIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">2</span>
            <span>{m["high-risk-device"]}</span>
          </div>
        </Box>

        {/* Security Alerts */}
        <Box className="flex flex-row gap-[25px]">
          <AlertIcon className="min-w-[60px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">2</span>
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
            <WeakDeviceItem deviceName={"A Device"} level={"critical"} />
            <WeakDeviceItem deviceName={"B Device"} level={"high"} />
            <WeakDeviceItem deviceName={"C Device"} level={"medium"} />
            <WeakDeviceItem deviceName={"D Device"} level={"low"} />
            <WeakDeviceItem deviceName={"E Device"} level={"critical"} />
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
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"critical"}
              total={52}
              value={60}
              ratio={[3, 2, 1, 3]}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"high"}
              total={40}
              value={40}
              ratio={[3, 2, 1, 3]}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"medium"}
              total={28}
              value={32}
              ratio={[3, 2, 1, 3]}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"low"}
              total={14}
              value={20}
              ratio={[3, 2, 1, 3]}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"critical"}
              total={8}
              value={5}
              ratio={[3, 2, 1, 3]}
            />
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
              <SecurityAlertsItem
                deviceName={"A device"}
                alerts={45}
                severity={"critical"}
              />
              <SecurityAlertsItem
                deviceName={"B device"}
                alerts={30}
                severity={"high"}
              />
              <SecurityAlertsItem
                deviceName={"C device"}
                alerts={15}
                severity={"medium"}
              />
              <SecurityAlertsItem
                deviceName={"D device"}
                alerts={7}
                severity={"low"}
              />
              <SecurityAlertsItem
                deviceName={"E device"}
                alerts={3}
                severity={"critical"}
              />
            </div>
            {/* graph */}
            <div className="flex-4 flex justify-center items-center w-full">
              <DonutChart
                width={120}
                height={120}
                innerRadius={45}
                outerRadius={60}
                data={[
                  {
                    name: "A Device",
                    value: 45,
                    color: "#f72585",
                  },
                  {
                    name: "B Device",
                    value: 30,
                    color: "#7209B7",
                  },
                  {
                    name: "A Device",
                    value: 15,
                    color: "#3470EC",
                  },
                  {
                    name: "A Device",
                    value: 7,
                    color: "#00B4D8",
                  },
                  {
                    name: "A Device",
                    value: 3,
                    color: "white",
                  },
                ]}
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
          <SecurityAlertsListItem
            alertName={"SQL Injection Detected"}
            edgeInfo={{ from: "1.1.1.1:1235", to: "123.123.1.3:80" }}
            date={"2025. 02. 20"}
          />
          <SecurityAlertsListItem
            alertName={"SQL Injection Detected"}
            edgeInfo={{ from: "1.1.1.1:1235", to: "123.123.1.3:80" }}
            date={"2025. 02. 20"}
          />
          <SecurityAlertsListItem
            alertName={"SQL Injection Detected"}
            edgeInfo={{ from: "1.1.1.1:1235", to: "123.123.1.3:80" }}
            date={"2025. 02. 20"}
          />
          <SecurityAlertsListItem
            alertName={"SQL Injection Detected"}
            edgeInfo={{ from: "1.1.1.1:1235", to: "123.123.1.3:80" }}
            date={"2025. 02. 20"}
          />
        </Box>
        {/* GRAPH: Security Alerts */}
        <Box title={m["graph-security-alerts"]} className="min-h-[335px]">
          {""}
        </Box>
      </div>
    </div>
  );
}
