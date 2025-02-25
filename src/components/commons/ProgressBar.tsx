import { Box, LinearProgress } from "@mui/material";

interface Props {
  value?: number;
}

export default function ProgressBar({ value }: Props) {
  return (
    <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        {/* 배경 바 스타일 */}
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 12, // 두께 조절
            borderRadius: 6,
            background: "#1a1f2a", // 배경 그라데이션
            "& .MuiLinearProgress-bar": {
              background: "linear-gradient(90deg, #ED7541, #FF3F2E)", // 진행 바 그라데이션
            },
          }}
        />
      </Box>
    </Box>
  );
}
