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
import {
  OnChangeFn,
  SortingState,
  PaginationState,
  ColumnFiltersState,
} from "@tanstack/react-table";

import CustomTopToolbar from "./CustomTopToolbar";

interface Props<T extends MRT_RowData> {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  totalElements: number;
  isError: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
  setGlobalFilter: OnChangeFn<any>;
  setPagination: OnChangeFn<PaginationState>;
  setSorting: OnChangeFn<SortingState>;
  columnFilters: MRT_ColumnFiltersState;
  globalFilter: string;
  pagination: MRT_PaginationState;
  sorting: MRT_SortingState;
  onRowClick?: (row: MRT_Row<T>) => void;
}

export default function CustomTable<T extends MRT_RowData>({
  columns,
  data,
  totalElements,
  isError,
  isLoading,
  isRefetching,
  sorting,
  pagination,
  globalFilter,
  columnFilters,
  setSorting,
  setPagination,
  setGlobalFilter,
  setColumnFilters,
  onRowClick,
}: Props<T>) {
  const table = useMaterialReactTable({
    columns,
    data,
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
    rowCount: totalElements ?? 0,
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
