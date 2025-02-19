"use client";

import { getAssetLIst } from "@/api";
import { AssetType, ListType } from "@/types/api";
import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
} from "material-react-table";
import { useState } from "react";
import { useQuery } from "react-query";

export default function VulnerabilitiesLogic() {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 3,
  });

  const { data, isLoading, isError, isRefetching } = useQuery<
    ListType<AssetType>
  >(
    [
      `asset-list`,
      {
        // columnFilters,
        globalFilter,
        pagination,
        // sorting,
      },
    ],
    () => {
      const page = `page=${pagination.pageIndex}`;
      const size = `size=${pagination.pageSize}`;
      const filters = `filters=${JSON.stringify(columnFilters ?? [])}`;
      const gFilter = `search=${globalFilter}`;
      const sort = `sort=${JSON.stringify(sorting ?? [])}`;

      const queryString = `${page}&${size}&${filters}&${gFilter}&${sort}`;

      console.log("get Asset list: query string::", queryString);
      return getAssetLIst(queryString);
    },
  );

  return {
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
  };
}
