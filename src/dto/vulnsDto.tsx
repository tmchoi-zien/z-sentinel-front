import {
  VulnerabilitiesType,
  VulnsGroupByRiskType,
  VulnsHighRiskType,
  VulnsTop5ByManufacturerType,
  VulnsTop5ByModelType,
  VulnsTop5ByTypeType,
  VulnsTop5Type,
} from "@/types/api";

interface OverviewProps {
  vulns: VulnerabilitiesType[];
  highRiskDevices: VulnsHighRiskType[];
  vulnsGroupByRisk: VulnsGroupByRiskType[];
  vulnsTop5: VulnsTop5Type[];
  vulnsTop5ByModel: VulnsTop5ByModelType[];
  vulnsTop5ByType: VulnsTop5ByTypeType[];
  vulnsTop5ByManufacturer: VulnsTop5ByManufacturerType[];
}

export function overviewDto({
  vulns,
  highRiskDevices,
  vulnsGroupByRisk,
  vulnsTop5,
  vulnsTop5ByModel,
  vulnsTop5ByType,
  vulnsTop5ByManufacturer,
}: OverviewProps) {
  return {
    vulns: vulns.filter((item, idx) => idx < 5),
    highRiskDevices: highRiskDevices.length,
    vulnsGroupByRisk: vulnsGroupByRisk.map((item) => ({
      ...item,
      risk: item.risk.toLowerCase(),
    })),
    vulnsTop5: {
      total: vulnsTop5.reduce((prev, curr) => prev + curr.count, 0),
      data: vulnsTop5.map((item) => ({
        ...item,
        risk: item.risk.toLowerCase(),
      })),
    },
    vulnsTop5ByModel: vulnsTop5ByModel.map((item) => ({
      ...item,
      deviceModel: item.device_Model,
    })),
    vulnsTop5ByType: vulnsTop5ByType.map((item) => ({
      ...item,
      deviceType: item.device_Type,
    })),
    vulnsTop5ByManufacturer: vulnsTop5ByManufacturer.map((item) => ({
      ...item,
      deviceManufacturer: item.device_Manufacturer,
    })),
  };
}
