import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import * as TEXT from "@/locale/ko/page.json";

import { getAlerts } from "@/api";
import { AlertType } from "@/types/api";
import Table from "@/components/commons/Table";
import Highlighter from "@/components/commons/Highlighter";

const m = TEXT["security-alerts"];

interface Props {}

export default function TabSecurityAlerts({}: Props) {
  const columns = useMemo<MRT_ColumnDef<AlertType>[]>(
    () => [
      {
        size: 80,
        header: m["table-columns"][0],
        accessorFn: (row) => `${row.id}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 200,
        header: m["table-columns"][1],
        accessorFn: (row) => `${row.priority}`,
        Cell: ({ renderedCellValue }) => (
          <Highlighter value={renderedCellValue} color="red" />
        ),
      },
      {
        size: 150,
        header: m["table-columns"][2],
        accessorFn: (row) => `${row.name}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][3],
        accessorFn: (row) => `${row.sourceIp}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][4],
        accessorFn: (row) => `${row.sourcePort}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][5],
        accessorFn: (row) => `${row.destinationIp}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][6],
        accessorFn: (row) => `${row.destinationPort}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: m["table-columns"][7],
        accessorFn: (row) => `${row.created}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
    ],
    [],
  );

  return (
    <div className="mt-[40px]">
      <Table
        getData={getAlerts}
        columns={columns}
        onRowClick={(row) => {
          // router.push(`${ROUTE.DEVICES}/${row.id}`);
        }}
      />
    </div>
  );
}
