import { ROUTE } from "./common";
export interface MenusType {
  title: string;
  pathname: string;
  description: string;
  linkable: boolean;
  icon?: string;
  childrens?: MenusType[];
}

export const MENUS: MenusType[] = [
  {
    title: "Home",
    pathname: ROUTE.HOME,
    description: "홈",
    linkable: true,
  },
  {
    title: "Devices",
    pathname: ROUTE.DEVICES,
    description: "디바이스",
    linkable: true,
  },
  {
    title: "Vulnerabilities",
    pathname: ROUTE.VULNERABILITIES,
    description: "취약점",
    linkable: true,
  },
  {
    title: "Security Alerts",
    pathname: ROUTE.SECURITY_ALERTS,
    description: "보안 알림",
    linkable: true,
  },
];
