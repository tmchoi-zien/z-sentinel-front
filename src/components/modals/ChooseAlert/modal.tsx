"use client";

import * as TEXT from "@/locale/ko/modal.json";
import ChooseAlertLogic from "./logic";
import { useEffect } from "react";
import useModal from "../useModal";

const t = TEXT["choose-alert"];

interface Props {
  data: any;
  onClose: () => void;
}

export default function ChooseAlert({ data, onClose }: Props) {
  const { deviceId } = data;
  const { alerts, isLoading, error } = ChooseAlertLogic({ deviceId });
  const { openSecurityAlertDetail } = useModal();

  useEffect(() => {
    console.log("open choose alert");
  }, []);

  const handleOpenAlertDetail = (id: number) => {
    openSecurityAlertDetail({
      alertId: id,
      onClose: (res) => {
        console.log(res);
      },
    });
  };

  return (
    <>
      <div>{t["title"]}</div>
      <div className="flex flex-col gap-10 mt-10">
        {alerts &&
          alerts?.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => handleOpenAlertDetail(item.id)}
              >
                {item.name} ({item.id}){" "}
              </div>
            );
          })}
      </div>
      {/* <div>{JSON.stringify(alerts || "")}</div> */}
    </>
  );
}
