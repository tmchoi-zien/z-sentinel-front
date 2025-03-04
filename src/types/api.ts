/**
 * API 관련된 타입을 정의한다.
 * get요청, post요청에 대한 데이터 타입 정의
 */

import { Node, Edge } from "vis-network";

export interface ResponseType<T> {
  code: number;
  data: T;
}

/**
 * Home
 */

export interface HomeDeviceType {
  id: number;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model?: string;
  description: any;
  isConnected: boolean;
  firmwareVersion?: string;
  os?: string;
  osCpe?: string;
  osFamily?: string;
  adminPage?: string;
  vnc?: string;
  createdBy: any;
  scan: number;
}

export interface HomeLevelType {
  id: number;
  overallRisk: string;
  created: string;
  modified: string;
  status: string;
  description: string;
  createdBy: any;
}

export interface HomeHighRiskDevcieType {
  id: number;
  vulnerabilityCategory: string;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model: string;
  description: string;
  createdBy: any;
  scan: number;
}

export interface HomeWeakDeviceType {
  id: number;
  vulnerabilityCategory: string;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model: string;
  description: string;
  createdBy: any;
  scan: number;
}

export interface HomeVulnsType {
  name: string;
  count: number;
}

export interface HomeSecurityAlertType {
  id: number;
  alertFrequency: number;
  alertCategory: string;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model: string;
  description: string;
  createdBy: any;
  scan: number;
}

export interface HomeAlertType {
  id: number;
  created: string;
  modified: string;
  name: string;
  priority: number;
  severity: any;
  cvss: any;
  sourceIp: string;
  sourcePort: number;
  destinationIp: string;
  destinationPort: number;
  protocol: string;
  detectedRule: string;
  description: string;
  createdBy: any;
  device: number;
}

export interface HomeGraphType {
  nodes: Node[];
  edges: Edge[];
}

/**
 * Devices
 */

export interface DeviceType {
  id: number;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model?: string;
  description: any;
  isConnected: boolean;
  firmwareVersion?: string;
  os?: string;
  osCpe?: string;
  osFamily?: string;
  adminPage?: string;
  vnc?: string;
  createdBy: any;
  scan: number;
}

/**
 * Vulnerabilities
 */

export interface VulnerabilitiesType {
  id: number;
  created: string;
  modified: string;
  target: string;
  name: string;
  risk: string;
  cvss: number;
  description: string;
  createdBy: any;
  device: number;
}

export interface VulnsHighRiskType {
  id: number;
  vulnerabilityCategory: string;
  created: string;
  modified: string;
  ip: string;
  macAddress: string;
  manufacturer: string;
  type: string;
  model: string;
  description: any;
  isConnected: boolean;
  firmwareVersion: string;
  os?: string;
  osCpe?: string;
  osFamily?: string;
  adminPage?: string;
  vnc: any;
  createdBy: any;
  scan: number;
}

export interface VulnsGroupByRiskType {
  risk: string;
  count: number;
}

export interface VulnsTop5Type {
  name: string;
  risk: string;
  count: number;
}

export interface VulnsTop5ByModelType {
  device_Model: string;
  count: number;
  deviceCount: number;
}

export interface VulnsTop5ByTypeType {
  device_Type: string;
  count: number;
  deviceCount: number;
}

export interface VulnsTop5ByManufacturerType {
  device_Manufacturer: string;
  count: number;
  deviceCount: number;
}

export interface VulnDetailType {
  id: number;
  name: string;
  description: string;
  cvss: {
    vector: string;
    baseScore: number;
    impactScore: number;
    exploitabilityScore: number;
  };
  cwe: string[];
  affectedProducts: any[];
  references: any[];
  publishedDate: string;
  lastModifiedDate: string;
}

/**
 * Security alerts
 */
