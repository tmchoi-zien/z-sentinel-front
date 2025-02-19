"use client";
import { useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";

import * as TEXT from "@/locale/ko/page.json";
import VulnerabilitiesLogic from "./logic";
import { AssetType, ListType } from "@/types/api";
import CustomTable from "@/components/commons/CustomTable";
import useModal from "@/components/modals/useModal";

const t = TEXT["vulnerabilities"];

export default function Vulnerabilities() {
  const {
    data,
    isLoading,
    isError,
    isRefetching,
    columnFilters,
    setColumnFilters,
    globalFilter,
    setGlobalFilter,
    sorting,
    setSorting,
    pagination,
    setPagination,
  } = VulnerabilitiesLogic();
  const { openVulnerabilityDetail } = useModal();

  const columns = useMemo<MRT_ColumnDef<AssetType>[]>(
    () => [
      {
        size: 80,
        header: t["table-columns"][0],
        accessorFn: (row) => `${row.idx}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: t["table-columns"][1],
        accessorFn: (row) => `${row.year}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: t["table-columns"][2],
        accessorFn: (row) => `${row.workType}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 200,
        header: t["table-columns"][3],
        accessorFn: (row) => `${row.name}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: t["table-columns"][4],
        accessorFn: (row) => `${row.sso1Name}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: t["table-columns"][5],
        accessorFn: (row) => `${row.openDay}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
      {
        size: 150,
        header: t["table-columns"][6],
        accessorFn: (row) => `${row.status}`,
        Cell: ({ renderedCellValue }) => <>{renderedCellValue}</>,
      },
    ],
    [],
  );

  return (
    <>
      <h3>Vulnerabilities</h3>
      <CustomTable
        columns={columns}
        data={(data as ListType<AssetType>)?.content || []}
        totalElements={data?.totalElements ?? 0}
        isError={isError}
        isLoading={isLoading}
        isRefetching={isRefetching}
        setColumnFilters={setColumnFilters}
        setGlobalFilter={setGlobalFilter}
        setPagination={setPagination}
        setSorting={setSorting}
        columnFilters={columnFilters}
        globalFilter={globalFilter}
        pagination={pagination}
        sorting={sorting}
        onRowClick={(row) => {
          openVulnerabilityDetail({ index: row.index, onClose: () => {} });
        }}
      />
    </>
  );
}
