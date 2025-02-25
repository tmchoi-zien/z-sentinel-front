"use client";
import { useQuery } from "react-query";

import { HomeAlertType, ResponseType } from "@/types/api";
import { getHomeAlerts } from "@/api";

interface Props {
  deviceId: number;
}

export default function ChooseAlertLogic({ deviceId }: Props) {
  const { data, isLoading, error } = useQuery<
    ResponseType<HomeAlertType[]>,
    Error
  >([`choose-alert`, deviceId], () => getHomeAlerts({ device: deviceId }));

  return { alerts: data?.data, isLoading, error };
}
