"use client";
import * as TEXT from "@/locale/ko/page.json";

import Box from "@/components/commons/Box";
import RiskIcon from "@/components/icons/RiskIcon";
import DonutChart from "@/components/commons/DonutChart";
import LegendItem from "@/components/commons/LegendItem";
import VulnerableRowItem from "@/components/commons/VulnerableRowItem";
import VulnerabilitiesItem from "@/components/commons/VulnerabilitiesItem";

const m = TEXT["vulnerabilities"];

interface Props {}

export default function Overview({}: Props) {
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
            <span className="font-bold text-3xl">2</span>
            <span>{m["high-risk-device"]}</span>
          </div>
        </Box>

        {/* Level Tile */}
        <Box className="flex-2 flex min-h-[150px]">
          <div className="flex felx-row gap-[10px] w-full">
            <span className="w-full h-full bg-critical rounded-lg" />
            <span className="w-full h-full bg-high rounded-lg" />
            <span className="w-full h-full bg-medium rounded-lg" />
            <span className="w-full h-full bg-low rounded-lg" />
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
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"critical"}
              total={52}
              value={60}
              ratio={[2, 1, 1, 6]}
              minHeight={32}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"high"}
              total={40}
              value={40}
              ratio={[2, 1, 1, 6]}
              minHeight={32}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"medium"}
              total={28}
              value={32}
              ratio={[2, 1, 1, 6]}
              minHeight={32}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"low"}
              total={14}
              value={20}
              ratio={[2, 1, 1, 6]}
              minHeight={32}
            />
            <VulnerabilitiesItem
              vulnName={"CVE-2004-2761"}
              level={"critical"}
              total={8}
              value={5}
              ratio={[2, 1, 1, 6]}
              minHeight={32}
            />
          </div>
        </Box>

        {/* Top 5 Security Alerts */}
        <Box title={m["vulns-by-severity"]} className="flex-2 min-h-[280px]">
          <div className="flex flex-row px-[40px]">
            {/* legend */}
            <div className="flex-4 flex flex-col justify-center gap-[15px] pb-[30px]">
              <LegendItem level={"critical"} value={7} />
              <LegendItem level={"high"} value={11} />
              <LegendItem level={"medium"} value={4} />
              <LegendItem level={"low"} value={2} />
              <LegendItem level={"na"} value={1} />
            </div>
            {/* graph */}
            <div className="flex-6 flex justify-center items-center">
              <DonutChart
                width={180}
                height={180}
                innerRadius={70}
                outerRadius={90}
                data={[
                  {
                    name: "Critical",
                    value: 7,
                    color: "#f72585",
                  },
                  {
                    name: "High",
                    value: 11,
                    color: "#7209B7",
                  },
                  {
                    name: "Medium",
                    value: 4,
                    color: "#3470EC",
                  },
                  {
                    name: "Low",
                    value: 2,
                    color: "#00B4D8",
                  },
                  {
                    name: "N/A",
                    value: 1,
                    color: "white",
                  },
                ]}
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
            <div className="flex-6 flex flex-col justify-center items-start gap-[12px] ml-[10px]">
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
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={7}
                uniqueVuln={50}
                color={"top1"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={11}
                uniqueVuln={58}
                color={"top2"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={4}
                uniqueVuln={56}
                color={"top3"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={1}
                uniqueVuln={2}
                color={"top4"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={0}
                uniqueVuln={59}
                color={"top5"}
                ratio={[2, 1, 1]}
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
                    value: 7,
                    color: "#FFC300",
                  },
                  {
                    name: "B Device",
                    value: 11,
                    color: "#F72585",
                  },
                  {
                    name: "A Device",
                    value: 4,
                    color: "#4CC9F0",
                  },
                  {
                    name: "A Device",
                    value: 1,
                    color: "#5DD400",
                  },
                  {
                    name: "A Device",
                    value: 0,
                    color: "#005F73",
                  },
                ]}
              />
            </div>
          </div>
        </Box>

        {/* Top 5 Vulnerable Device Types */}
        <Box title={m["vuln-device-type"]} className="flex-1 min-h-[280px]">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-center items-start gap-[12px] ml-[10px]">
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
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={7}
                uniqueVuln={50}
                color={"top1"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={11}
                uniqueVuln={58}
                color={"top2"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={4}
                uniqueVuln={56}
                color={"top3"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={1}
                uniqueVuln={2}
                color={"top4"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={0}
                uniqueVuln={59}
                color={"top5"}
                ratio={[2, 1, 1]}
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
                    value: 7,
                    color: "#FFC300",
                  },
                  {
                    name: "B Device",
                    value: 11,
                    color: "#F72585",
                  },
                  {
                    name: "A Device",
                    value: 4,
                    color: "#4CC9F0",
                  },
                  {
                    name: "A Device",
                    value: 1,
                    color: "#5DD400",
                  },
                  {
                    name: "A Device",
                    value: 0,
                    color: "#005F73",
                  },
                ]}
              />
            </div>
          </div>
        </Box>

        {/* Top 5 Vulnerable Manufacturer */}
        <Box title={m["vuln-manufacturer"]} className="flex-1 min-h-[280px]">
          <div className="flex flex-row">
            {/* table */}
            <div className="flex-6 flex flex-col justify-center items-start gap-[12px] ml-[10px]">
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
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={7}
                uniqueVuln={50}
                color={"top1"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={11}
                uniqueVuln={58}
                color={"top2"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={4}
                uniqueVuln={56}
                color={"top3"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={1}
                uniqueVuln={2}
                color={"top4"}
                ratio={[2, 1, 1]}
              />
              <VulnerableRowItem
                modelName={"Pavillion"}
                vulnerableDevice={0}
                uniqueVuln={59}
                color={"top5"}
                ratio={[2, 1, 1]}
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
                    value: 7,
                    color: "#FFC300",
                  },
                  {
                    name: "B Device",
                    value: 11,
                    color: "#F72585",
                  },
                  {
                    name: "A Device",
                    value: 4,
                    color: "#4CC9F0",
                  },
                  {
                    name: "A Device",
                    value: 1,
                    color: "#5DD400",
                  },
                  {
                    name: "A Device",
                    value: 0,
                    color: "#005F73",
                  },
                ]}
              />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
