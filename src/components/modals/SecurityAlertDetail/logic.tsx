"use client";

import { getAlert } from "@/api";
import { useQuery } from "react-query";

interface Props {
  alertId: number;
}
export default function SecurityAlertDetailLogic({ alertId }: Props) {
  const { data, isLoading, error } = useQuery(
    // <
    //   ResponseType<HomeAlertType[]>,
    //   Error
    // >
    [`choose-alert`, alertId],
    () => getAlert(alertId),
  );

  return { alert: data?.data, isLoading, error };
}
