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
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
interface Props<T extends MRT_RowData> {
  getData: (res: any) => Promise<any>;
  columns: MRT_ColumnDef<T>[];
  onRowClick?: (row: T) => void;
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
    pageSize: 10,
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark", // 🌙 다크 테마 적용
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
    },
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
      // const queryString = `${page}&${size}&${filters}&${gFilter}&${sort}`;
      // console.log("query string::", queryString);
      const params = {
        page: pagination.pageIndex,
        size: pagination.pageSize,
        filters: JSON.stringify(columnFilters ?? []),
        search: globalFilter,
        sort: JSON.stringify(sorting ?? []),
      };
      return getData(params);
    },
  );

  const table = useMaterialReactTable({
    columns,
    data: data?.data || [],
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
        sx: {
          backgroundColor: row.index % 2 === 0 ? "#030712" : "#0E131F",
          borderBottom: "none", // 행 사이에 테두리 제거
        },
        onClick: () => {
          onRowClick && onRowClick(row.original);
        },
      };
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "#0E131F", // 헤더 배경색 설정
        color: "#FFFFFF", // 헤더 텍스트 색상 설정
      },
    },
    muiTableProps: {
      sx: {
        border: "1px solid #0E131F", // 테이블의 테두리 설정
        borderCollapse: "collapse", // 테이블 내부의 공백 제거
      },
    },
    // 페이지네이션 UI 옵션
    muiPaginationProps: {
      shape: "rounded",
      color: "primary",
      variant: "text",
      showRowsPerPage: false,
      sx: {
        borderTop: "1px solid #0E131F", // 페이지네이션의 상단 테두리 추가
        backgroundColor: "#0E131F", // 페이지네이션 배경 색상 설정
        color: "#FFFFFF", // 페이지네이션 텍스트 색상 설정
        "& .MuiTablePagination-root": {
          backgroundColor: "#0E131F", // 페이지네이션의 전체 배경 색상
          color: "#FFFFFF", // 페이지네이션의 전체 텍스트 색상
        },
        "& .MuiTablePagination-actions": {
          backgroundColor: "#0E131F", // 페이지네이션 액션 버튼 영역 배경 설정
          color: "#FFFFFF", // 액션 버튼 텍스트 색상
        },
      },
      // sx: {
      //   borderTop: "1px solid #0E131F", // 페이지네이션의 상단 테두리 추가
      //   backgroundColor: "#0E131F", // 페이지네이션 배경 색상 설정
      //   // color: "#FFFFFF", // 페이지네이션 텍스트 색상 설정
      // },
    },
    paginationDisplayMode: "pages",
    muiTableContainerProps: {
      sx: {
        minHeight: "50vh",
        border: "1px solid #0E131F",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MaterialReactTable table={table} />
    </ThemeProvider>
  );
}
