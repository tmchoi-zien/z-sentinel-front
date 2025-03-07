"use client";

import * as TEXT from "@/locale/ko/modal.json";
import SecurityAlertDetailLogic from "./logic";

const m = TEXT["security-alert-detail"];

interface Props {
  data: any;
  onClose: () => void;
}

export default function SecurityAlertDetail({ data, onClose }: Props) {
  const { alertId } = data;
  const { alert, isLoading, error } = SecurityAlertDetailLogic({ alertId });

  return (
    <>
      <div>{m["title"]}</div>
      <p>{JSON.stringify(alert || "")}</p>
    </>
  );
}
