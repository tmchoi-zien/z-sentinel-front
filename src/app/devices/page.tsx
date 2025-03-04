"use client";
import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import * as TEXT from "@/locale/ko/page.json";

import { ROUTE } from "@/constants/common";
import { getDevices } from "@/api";
import { DeviceType } from "@/types/api";
import { useRouter } from "next/navigation";
import Table from "@/components/commons/Table";

const m = TEXT["devices"];

export default function Devices() {
  const router = useRouter();

  const columns = useMemo<MRT_ColumnDef<DeviceType>[]>(
    () => [
      {
        size: 80,
        header: m["table-columns"][0],
        accessorFn: (row) => `${row.id}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][1],
        accessorFn: (row) => `${row.type}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][2],
        accessorFn: (row) => `${row.ip}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 200,
        header: m["table-columns"][3],
        accessorFn: (row) => `${row.manufacturer}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][4],
        accessorFn: (row) => `${row.model}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][5],
        accessorFn: (row) => `${row.isConnected}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
    ],
    [],
  );

  return (
    <div className="mt-[40px]">
      <Table
        getData={getDevices}
        columns={columns}
        onRowClick={(row) => {
          router.push(`${ROUTE.DEVICES}/${row.id}`);
        }}
      />
    </div>
  );
}
