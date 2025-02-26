import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#f72585", "#00C49F", "#FFBB28", "#FF8042"];

export interface Props {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
}

export default function DonutChart({
  data,
  width = 120,
  height = 120,
  innerRadius = 45,
  outerRadius = 60,
}: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          stroke="none"
        >
          {data &&
            data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                // fill={COLORS[index % COLORS.length]}
              />
            ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
