import {
  MRT_Row,
  MRT_RowData,
  MRT_ColumnDef,
  MRT_SortingState,
  MaterialReactTable,
  MRT_PaginationState,
  useMaterialReactTable,
  MRT_ColumnFiltersState,
} from "material-react-table";
import CustomTopToolbar from "./CustomTopToolbar";
import { useState } from "react";
import { useQuery } from "react-query";
interface Props<T extends MRT_RowData> {
  getData: (res: any) => Promise<any>;
  columns: MRT_ColumnDef<T>[];
  onRowClick?: (row: MRT_Row<T>) => void;
}

export default function Table<T extends MRT_RowData>({
  getData,
  columns,
  onRowClick,
}: Props<T>) {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 3,
  });

  const { data, isLoading, isError, isRefetching } = useQuery(
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
      return getData(queryString);
    },
  );

  const table = useMaterialReactTable({
    columns,
    data: data?.content ?? [],
    onColumnFiltersChange: setColumnFilters, // onChange callback on filter by column
    onGlobalFilterChange: setGlobalFilter, // onChange callback on global filter(ex: search)
    onPaginationChange: setPagination, // onChange callback on pagination
    onSortingChange: setSorting, // onChange callback on sorting
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
    },
    rowCount: data?.totalElements ?? 0,
    // 초기 세팅
    initialState: {
      showColumnFilters: false, // 컬럼 별 필터 노출
      showGlobalFilter: true, // 검색 기능 노출
      // 헤더 고정
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    enableColumnPinning: true, // 컬럼 고정
    enableColumnActions: false, // 컬럼별 추가 필터기능 on/off
    manualPagination: true,
    manualSorting: true,
    renderTopToolbar: CustomTopToolbar, // 커스텀 탑 툴바 렌더링
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    // 테이블 로우 클릭 이벤트
    muiTableBodyRowProps: ({ row }) => {
      return {
        onClick: () => {
          onRowClick && onRowClick(row);
        },
      };
    },
    // 페이지네이션 UI 옵션
    muiPaginationProps: {
      shape: "rounded",
      color: "primary",
      variant: "text",
      showRowsPerPage: false,
    },
    paginationDisplayMode: "pages",
    muiTableContainerProps: {
      sx: {
        minHeight: "50vh",
      },
    },
  });

  return <MaterialReactTable table={table} />;
}
