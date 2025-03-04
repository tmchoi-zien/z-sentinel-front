"use client";
import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import * as TEXT from "@/locale/ko/page.json";

import { LEVEL } from "@/constants/common";
import { getVulns } from "@/api";
import { VulnerabilitiesType } from "@/types/api";
import Table from "@/components/commons/Table";
import LevelTag from "@/components/commons/LevelTag";
import useModal from "@/components/modals/useModal";

const m = TEXT["vulnerabilities"];

interface Props {}

export default function TabVulnerabilities({}: Props) {
  const { openVulnerabilityDetail } = useModal();

  const columns = useMemo<MRT_ColumnDef<VulnerabilitiesType>[]>(
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
        accessorFn: (row) => `${row.device}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][2],
        accessorFn: (row) => `${row.device}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 200,
        header: m["table-columns"][3],
        accessorFn: (row) => `${row.target}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][4],
        accessorFn: (row) => `${row.name}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][5],
        accessorFn: (row) => `${row.risk}`,
        Cell: ({ renderedCellValue }) => (
          <LevelTag
            level={
              (
                renderedCellValue as string
              )?.toLowerCase() as (typeof LEVEL)[number]
            }
          />
        ),
      },
      {
        size: 150,
        header: m["table-columns"][6],
        accessorFn: (row) => `${row.cvss}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][7],
        accessorFn: (row) => `${row.description}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
    ],
    [],
  );

  return (
    <div className="mt-[40px]">
      <Table
        getData={getVulns}
        columns={columns}
        onRowClick={(row) => {
          openVulnerabilityDetail({
            cveName: row.name,
            onClose: () => {},
          });
        }}
      />
    </div>
  );
}
