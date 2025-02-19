"use client";
import { useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";

import * as TEXT from "@/locale/ko/page.json";
import Loading from "@/components/commons/Loading";
import DevicesLogic from "./logic";
import { useAlert } from "@/contexts/AlertContext";
import Table from "@/components/commons/Table";

const m = TEXT["devices"];

export default function Devices() {
  const { data, isLoading, error, page, setPage, totalPages } = DevicesLogic();
  const { openAlert } = useAlert();

  useEffect(() => {
    if (error) {
      openAlert(error);
    }
  }, [error]);

  if (isLoading) return <Loading />;
  if (!data) return <>no data</>;

  const rows = data.map((item: any) => {
    return {
      // #: 인덱스
      index: <>{item.assetIdx}</>,
      // IP
      ip: <>{item.year}</>,
      // Manufacturer
      manufacturer: <>{item.workType}</>,
      // Model
      model: <>{item.serviceName}</>,
      // Type
      type: <>{item.workType}</>,
      // Status
      status: <>{item.status}</>,
    };
  });

  const columns: ColumnDef<(typeof rows)[0]>[] = [
    {
      id: "index",
      header: m["table-columns"][0],
      accessorKey: "index",
      cell: ({ row }) => {
        return row.original.index;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
    {
      id: "ip",
      header: m["table-columns"][1],
      accessorKey: "ip",
      cell: ({ row }) => {
        return row.original.ip;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
    {
      id: "manufacturer",
      header: m["table-columns"][2],
      accessorKey: "manufacturer",
      cell: ({ row }) => {
        return row.original.manufacturer;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
    {
      id: "model",
      header: m["table-columns"][3],
      accessorKey: "model",
      cell: ({ row }) => {
        return row.original.model;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
    {
      id: "type",
      header: m["table-columns"][4],
      accessorKey: "type",
      cell: ({ row }) => {
        return row.original.type;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
    {
      id: "status",
      header: m["table-columns"][5],
      accessorKey: "status",
      cell: ({ row }) => {
        return row.original.status;
      },
      enableColumnFilter: true,
      filterFn: "equalsString",
    },
  ];
  return (
    <>
      <h3>{m["title"]}</h3>
      <Table
        columns={columns}
        rows={rows}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        customSize
        showFilter
      />
    </>
  );
}
