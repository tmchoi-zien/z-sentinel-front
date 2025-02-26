import { ROUTE } from "./common";
import HomeIcon from "@/components/icons/HomeIcon";
import VulnsIcon from "@/components/icons/VulnsIcon";
import DeviceIcon from "@/components/icons/DevicesIcon";
import SecurityAlertsIcon from "@/components/icons/SecurityAlertsIcon";
export interface MenusType {
  title: string;
  pathname: string;
  description: string;
  linkable: boolean;
  icon?: (res: any) => JSX.Element;
  childrens?: MenusType[];
}

export const MENUS: MenusType[] = [
  {
    title: "Home",
    pathname: ROUTE.HOME,
    description: "홈",
    linkable: true,
    icon: HomeIcon,
  },
  {
    title: "Devices",
    pathname: ROUTE.DEVICES,
    description: "디바이스",
    linkable: true,
    icon: DeviceIcon,
  },
  {
    title: "Vulnerabilities",
    pathname: ROUTE.VULNERABILITIES,
    description: "취약점",
    linkable: true,
    icon: VulnsIcon,
  },
  {
    title: "Security Alerts",
    pathname: ROUTE.SECURITY_ALERTS,
    description: "보안 알림",
    linkable: true,
    icon: SecurityAlertsIcon,
  },
];
