import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";
import VulnerabilityDetail from "./VulnerabilityDetail/modal";
import SecurityAlertDetail from "./SecurityAlertDetail/modal";
// import AddressBook from "./Sample/modal";

export default function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("auth context error");
  }
  const { openModal } = context;

  const openVulnerabilityDetail = ({
    index,
    onClose,
  }: {
    index: number;
    onClose: (res: any) => void;
  }) => {
    openModal({
      options: {
        size: "md",
        children: VulnerabilityDetail,
        data: { index },
      },
      onClose,
    });
  };

  const openSecurityAlertDetail = ({
    index,
    onClose,
  }: {
    index: number;
    onClose: (res: any) => void;
  }) => {
    openModal({
      options: {
        size: "md",
        children: SecurityAlertDetail,
        data: { index },
      },
      onClose,
    });
  };

  return { openVulnerabilityDetail, openSecurityAlertDetail };
}
