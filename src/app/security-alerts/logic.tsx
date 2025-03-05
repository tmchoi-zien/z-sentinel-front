"use client";

import { getAlertsGraph } from "@/api";
import graphDto from "@/dto/graphDto";
import { useQueries } from "react-query";

export function GraphLogic() {
  const queries = useQueries([
    { queryKey: [`alerts-graph`], queryFn: getAlertsGraph, suspense: true },
  ]);

  const isLoading = queries.some((item) => item.data === undefined);
  const dtoData = isLoading
    ? undefined
    : graphDto({
        alerts: queries[0]?.data.data,
      });

  return dtoData;
}

export function SecurityAlertsLogic() {
  return {};
}
