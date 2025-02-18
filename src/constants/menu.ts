export enum ROLE {
  MASTER = "마스터",
  INSPECTION_ADMIN = "점검 관리자",
  INSPECTOR = "점검 담당자",
  INSPECTION_REQUESTER = "점검 신청자",
  SECURITY_MANAGER = "기업보안 담당자",
}

const ANYONE = [
  ROLE.MASTER,
  ROLE.INSPECTOR,
  ROLE.INSPECTION_ADMIN,
  ROLE.INSPECTION_REQUESTER,
  ROLE.SECURITY_MANAGER,
];

export interface MenusType {
  title: string;
  pathname: string;
  description: string;
  linkable: boolean;
  permission?: ROLE[];
  icon?: string;
  childrens?: MenusType[];
}

export const MENUS: MenusType[] = [
  {
    title: "Home",
    pathname: "/home",
    description: "홈",
    linkable: true,
  },
  {
    title: "Devices",
    pathname: "/devices",
    description: "디바이스",
    linkable: true,
  },
  {
    title: "Vulnerabilities",
    pathname: "/vulnerabilitiese",
    description: "취약점",
    linkable: true,
  },
  {
    title: "Security Alerts",
    pathname: "/security-alerts",
    description: "보안 알림",
    linkable: true,
  },
];
