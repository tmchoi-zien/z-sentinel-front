"use client";
import * as TEXT from "@/locale/ko/page.json";
import { OverviewLogic } from "./logic";

import { COLOR_BY_LEVEL, COLOR_BY_RANK, LEVEL } from "@/constants/common";
import Box from "@/components/commons/Box";
import RiskIcon from "@/components/icons/RiskIcon";
import LevelTile from "@/components/commons/LevelTile";
import DonutChart from "@/components/commons/DonutChart";
import LegendItem from "@/components/commons/LegendItem";
import VulnerableRowItem from "@/components/commons/VulnerableRowItem";
import VulnerabilitiesItem from "@/components/commons/VulnerabilitiesItem";
import VulnsOverviewSkeleton from "@/components/skeletons/VulnsOverviewSkeleton";

const m = TEXT["vulnerabilities"];

interface Props {}

export default function TabOverView({}: Props) {
  const data = OverviewLogic();
  if (!data) return <VulnsOverviewSkeleton />;

  const {
    vulns,
    highRiskDevices,
    vulnsGroupByRisk,
    vulnsTop5,
    vulnsTop5ByModel,
    vulnsTop5ByType,
    vulnsTop5ByManufacturer,
  } = data;

  console.log(data);

  return (
    <>
      <div className="flex flex-row gap-[30px]">
        {/* level */}
        <Box className="flex-1 flex justify-center min-h-[150px]">
          <div className="w-[180px] h-[90px]">
            <DonutChart
              data={[
                {
                  name: "Low",
                  value: 1,
                  color: "#00B4D8",
                },
                {
                  name: "Medium",
                  value: 1,
                  color: "#3470EC",
                },
                {
                  name: "High",
                  value: 1,
                  color: "#7209B7",
                },
                {
                  name: "Critical",
                  value: 1,
                  color: "#f72585",
                },
              ]}
              width={180}
              height={180}
              innerRadius={70}
              outerRadius={90}
              startAngle={180}
              endAngle={0}
              cy={"110%"}
            />
          </div>
        </Box>

        {/* High Risk Devices */}
        <Box className="flex-1 flex flex-row items-center gap-[25px] min-h-[150px]">
          <RiskIcon className="min-w-[60px] ml-[10px]" />
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl">{highRiskDevices}</span>
            <span>{m["high-risk-device"]}</span>
          </div>
        </Box>

        {/* Level Tile */}
        <Box className="flex-2 flex min-h-[150px]">
          <div className="flex felx-row gap-[10px] w-full">
            <LevelTile
              level={"critical"}
              count={vulnsGroupByRisk[0]?.count || 0}
            />
            <LevelTile level={"high"} count={vulnsGroupByRisk[1]?.count || 0} />
            <LevelTile
              level={"medium"}
              count={vulnsGroupByRisk[2]?.count || 0}
            />
            <LevelTile level={"low"} count={vulnsGroupByRisk[3]?.count || 0} />
          </div>
        </Box>
      </div>

      <div className="flex flex-row gap-[30px]">
        {/* Top 5 Vulnerabilities */}
        <Box title={m["vulns"]} className="flex-3 min-h-[280px]">
          <div className="flex flex-col justify-center items-start">
            {/* columns */}
            <div className="flex flex-row justify-between w-full text-[11px] text-[#999999] mb-[10px]">
              <div className="flex flex-2 justify-center w-full">
                {m["vulns-columns"][0]}
              </div>
              <div className="flex flex-1 justify-center w-full">
                {m["vulns-columns"][1]}
              </div>
              <div className="flex flex-1 justify-center w-full">
                {m["vulns-columns"][2]}
              </div>
              <div className="flex flex-6 justify-center w-full"></div>
            </div>
            {/* data */}
            {vulnsTop5.data.map((item, index) => {
              return (
                <VulnerabilitiesItem
                  key={index}
                  vulnName={item.name}
                  level={item.risk as (typeof LEVEL)[number]}
                  total={item.count}
                  value={Math.round(100 * (item.count / vulnsTop5.total))}
                  ratio={[2, 1, 1, 6]}
                  className={"min-h-[32px]"}
                />
              );
            })}
          </div>
        </Box>

        {/* Top 5 Security Alerts */}
        <Box title={m["vulns-by-severity"]} className="flex-2 min-h-[280px]">
          <div className="flex flex-row px-[40px]">
            {/* legend */}
            <div className="flex-4 flex flex-col justify-center gap-[15px] pb-[30px] min-h-[180px]">
              {vulnsGroupByRisk.map((item) => {
                return (
                  <LegendItem
                    key={item.risk}
                    level={item.risk as (typeof LEVEL)[number]}
                    value={item.count}
                  />
                );
              })}
            </div>
            {/* graph */}
            <div className="flex-6 flex justify-center items-center">
              <DonutChart
                width={180}
                height={180}
                innerRadius={70}
                outerRadius={90}
                data={vulnsGroupByRisk.map((item) => ({
                  name: item.risk,
                  value: item.count,
                  color: COLOR_BY_LEVEL[item.risk as (typeof LEVEL)[number]],
                }))}
              />
            </div>
          </div>
        </Box>
      </div>

      <div className="flex flex-row gap-[30px]">
        {/* Top 5 Vulnerable Models */}
        <Box title={m["vuln-models"]} className="flex-1 min-h-[280px]">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-start items-start gap-[12px] ml-[10px] min-h-[150px]">
              {/* columns */}
              <div className="flex flex-row justify-between gap-[15px] w-full text-[11px] text-[#999999] mb-[10px]">
                <div className="flex-2 flex justify-start">
                  {m["vuln-models-columns"][0]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-models-columns"][1]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-models-columns"][2]}
                </div>
              </div>
              {/* data */}
              {vulnsTop5ByModel.map((item, index) => {
                return (
                  <VulnerableRowItem
                    key={index}
                    modelName={item.deviceModel}
                    vulnerableDevice={item.count}
                    uniqueVuln={item.deviceCount}
                    rank={`top${index + 1}` as keyof typeof COLOR_BY_RANK}
                    ratio={[2, 1, 1]}
                  />
                );
              })}
            </div>
            {/* graph */}
            <div className="flex-4 flex justify-center items-center w-full">
              <DonutChart
                width={120}
                height={120}
                innerRadius={45}
                outerRadius={60}
                data={vulnsTop5ByModel.map((item, index) => ({
                  name: item.deviceModel,
                  value: item.deviceCount,
                  color:
                    COLOR_BY_RANK[
                      `top${index + 1}` as keyof typeof COLOR_BY_RANK
                    ],
                }))}
              />
            </div>
          </div>
        </Box>

        {/* Top 5 Vulnerable Device Types */}
        <Box title={m["vuln-device-type"]} className="flex-1 min-h-[280px]">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-start items-start gap-[12px] ml-[10px] min-h-[150px]">
              {/* columns */}
              <div className="flex flex-row justify-between gap-[15px] w-full text-[11px] text-[#999999] mb-[10px]">
                <div className="flex-2 flex justify-start">
                  {m["vuln-device-type-columns"][0]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-device-type-columns"][1]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-device-type-columns"][2]}
                </div>
              </div>
              {/* data */}
              {vulnsTop5ByType.map((item, index) => {
                return (
                  <VulnerableRowItem
                    key={index}
                    modelName={item.deviceType}
                    vulnerableDevice={item.count}
                    uniqueVuln={item.deviceCount}
                    rank={`top${index + 1}` as keyof typeof COLOR_BY_RANK}
                    ratio={[2, 1, 1]}
                  />
                );
              })}
            </div>
            {/* graph */}
            <div className="flex-4 flex justify-center items-center w-full">
              <DonutChart
                width={120}
                height={120}
                innerRadius={45}
                outerRadius={60}
                data={vulnsTop5ByType.map((item, index) => ({
                  name: item.deviceType,
                  value: item.deviceCount,
                  color:
                    COLOR_BY_RANK[
                      `top${index + 1}` as keyof typeof COLOR_BY_RANK
                    ],
                }))}
              />
            </div>
          </div>
        </Box>

        {/* Top 5 Vulnerable Manufacturer */}
        <Box title={m["vuln-manufacturer"]} className="flex-1 min-h-[280px]">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-start items-start gap-[12px] ml-[10px] min-h-[150px]">
              {/* columns */}
              <div className="flex flex-row justify-between gap-[15px] w-full text-[11px] text-[#999999] mb-[10px]">
                <div className="flex-2 flex justify-start">
                  {m["vuln-manufacturer-columns"][0]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-manufacturer-columns"][1]}
                </div>
                <div className="flex-1 flex justify-center">
                  {m["vuln-manufacturer-columns"][2]}
                </div>
              </div>
              {/* data */}
              {vulnsTop5ByManufacturer.map((item, index) => {
                return (
                  <VulnerableRowItem
                    key={index}
                    modelName={item.deviceManufacturer}
                    vulnerableDevice={item.count}
                    uniqueVuln={item.deviceCount}
                    rank={`top${index + 1}` as keyof typeof COLOR_BY_RANK}
                    ratio={[2, 1, 1]}
                  />
                );
              })}
            </div>
            {/* graph */}
            <div className="flex-4 flex justify-center items-center w-full">
              <DonutChart
                width={120}
                height={120}
                innerRadius={45}
                outerRadius={60}
                data={vulnsTop5ByManufacturer.map((item, index) => ({
                  name: item.deviceManufacturer,
                  value: item.deviceCount,
                  color:
                    COLOR_BY_RANK[
                      `top${index + 1}` as keyof typeof COLOR_BY_RANK
                    ],
                }))}
              />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
