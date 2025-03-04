import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";
import VulnerabilityDetail from "./VulnerabilityDetail/modal";
import SecurityAlertDetail from "./SecurityAlertDetail/modal";
import ChooseAlert from "./ChooseAlert/modal";
import VulnsDetailSkeleton from "../skeletons/VulnsDetailSkeleton";
// import AddressBook from "./Sample/modal";

export default function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("auth context error");
  }
  const { openModal } = context;

  const openVulnerabilityDetail = ({
    cveName,
    onClose,
  }: {
    cveName: string;
    onClose: (res: any) => void;
  }) => {
    openModal({
      options: {
        size: "md",
        children: VulnerabilityDetail,
        data: { cveName },
        fallback: <VulnsDetailSkeleton />,
      },
      onClose,
    });
  };

  const openSecurityAlertDetail = ({
    alertId,
    onClose,
  }: {
    alertId: number;
    onClose: (res: any) => void;
  }) => {
    openModal({
      options: {
        size: "md",
        children: SecurityAlertDetail,
        data: { alertId },
        fallback: <></>,
      },
      onClose,
    });
  };

  const openChooseAlert = ({
    deviceId,
    onClose,
  }: {
    deviceId: number;
    onClose: (res: any) => void;
  }) => {
    openModal({
      options: {
        size: "md",
        children: ChooseAlert,
        data: { deviceId },
      },
      onClose,
    });
  };

  return { openVulnerabilityDetail, openSecurityAlertDetail, openChooseAlert };
}
