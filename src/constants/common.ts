export const CONFIRM_NO = "NO";
export const CONFIRM_OK = "OK";

export const ROUTE = {
  HOME: "/home",
  DEVICES: "/devices",
  VULNERABILITIES: "/vulnerabilities",
  SECURITY_ALERTS: "/security-alerts",
};

export const LEVEL = ["critical", "high", "medium", "low", "na"] as const;

export const COLOR_BY_LEVEL = {
  critical: "#f72585",
  high: "#7209B7",
  medium: "#3470EC",
  low: "#00B4D8",
  na: "white",
};

export const COLOR_BY_RANK = {
  top1: "#9156FF",
  top2: "#5A3FFF",
  top3: "#268AFF",
  top4: "#1ED6FF",
  top5: "#3DFFDC",
};
