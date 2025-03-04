"use client";

import {
  getDevicesHighRisk,
  getVulns,
  getVulnsGroupByRisk,
  getVulnsTop5,
} from "@/api";
import { overviewDto } from "@/dto/vulnsDto";
import { useQueries } from "react-query";

export function OverviewLogic() {
  const queries = useQueries([
    // Vulnerabilities
    { queryKey: [`vulnerabilities`], queryFn: getVulns, suspense: true },
    // Devices high risk
    {
      queryKey: [`vulns-high-risk`],
      queryFn: getDevicesHighRisk,
      suspense: true,
    },
    // Vulns group by risk
    {
      queryKey: [`vulns-group-by-risk`],
      queryFn: getVulnsGroupByRisk,
      suspense: true,
    },
    // Vulns top 5
    { queryKey: [`vulns-top5`], queryFn: getVulnsTop5, suspense: true },
    // Vulns top 5 - Device model
    {
      queryKey: [`vulns-top5`, `device-model`],
      queryFn: () => getVulnsTop5({ keyword: "device__model" }),
      suspense: true,
    },
    // Vulns top 5 - Device type
    {
      queryKey: [`vulns-top5`, `device-type`],
      queryFn: () => getVulnsTop5({ keyword: "device__type" }),
      suspense: true,
    },
    // Vulns top 5 - Device manufacturer
    {
      queryKey: [`vulns-top5`, `device-manufacturer`],
      queryFn: () => getVulnsTop5({ keyword: "device__manufacturer" }),
      suspense: true,
    },
  ]);

  const isLoading = queries.some((item) => item.data === undefined);
  const dtoData = isLoading
    ? undefined
    : overviewDto({
        vulns: queries[0].data?.data,
        highRiskDevices: queries[1].data?.data,
        vulnsGroupByRisk: queries[2].data?.data,
        vulnsTop5: queries[3].data?.data,
        vulnsTop5ByModel: queries[4].data?.data,
        vulnsTop5ByType: queries[5].data?.data,
        vulnsTop5ByManufacturer: queries[6].data?.data,
      });

  return dtoData;
}

export function VulnerabilitiesLogic() {
  return {};
}
