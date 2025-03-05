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
  critical: "#FA3D3D",
  high: "#FF7728",
  medium: "#FFC300",
  low: "#00AF81",
  na: "white",
};

export const COLOR_BY_RANK = {
  top1: "#9156FF",
  top2: "#5A3FFF",
  top3: "#268AFF",
  top4: "#1ED6FF",
  top5: "#3DFFDC",
};

export const DEVICE_TYPE = {
  ROUTER: "Router",
  NVR: "NVR",
  CAMERA: "Camera",
  TV: "TV",
  PC: "PC",
  MODEM: "Modem",
};
