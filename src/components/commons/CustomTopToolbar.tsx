import {
  MRT_Row,
  MRT_RowData,
  MRT_TableInstance,
  MRT_ToggleFiltersButton,
  MRT_GlobalFilterTextField,
} from "material-react-table";
import { Box, Button, lighten } from "@mui/material";
import { mkConfig, generateCsv, download } from "export-to-csv";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface Props<T extends MRT_RowData> {
  table: MRT_TableInstance<T>;
}

export default function CustomTopToolbar<T extends MRT_RowData>({
  table,
}: Props<T>) {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportRows = (rows: MRT_Row<T>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: lighten(theme.palette.background.default, 0.05),
        display: "flex",
        gap: "0.5rem",
        p: "8px",
        justifyContent: "space-between",
      })}
    >
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <MRT_GlobalFilterTextField table={table} />
        <MRT_ToggleFiltersButton table={table} />
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Button
            disabled={table.getRowModel().rows.length === 0}
            onClick={() => handleExportRows(table.getRowModel().rows)}
            startIcon={<FileDownloadIcon />}
          >
            Export
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
