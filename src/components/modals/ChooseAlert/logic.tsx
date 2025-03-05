"use client";
import { useQuery } from "react-query";

import { AlertType, ResponseType } from "@/types/api";
import { getAlerts } from "@/api";

interface Props {
  deviceId: number;
}

export default function ChooseAlertLogic({ deviceId }: Props) {
  const { data, isLoading, error } = useQuery<ResponseType<AlertType[]>, Error>(
    [`choose-alert`, deviceId],
    () => getAlerts({ device: deviceId }),
  );

  return { alerts: data?.data, isLoading, error };
}
