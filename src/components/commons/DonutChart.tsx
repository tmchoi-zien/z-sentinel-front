import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#FFC300", "#F72585", "#4CC9F0", "#68DF47", "#005F73"];

export interface Props {
  data: {
    name: string;
    value: number;
    color?: string;
  }[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  cx?: string;
  cy?: string;
}

export default function DonutChart({
  data,
  width = 120,
  height = 120,
  innerRadius = 45,
  outerRadius = 60,
  startAngle = 0,
  endAngle = 360,
  cx = "50%",
  cy = "50%",
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
          startAngle={startAngle}
          endAngle={endAngle}
          cx={cx}
          cy={cy}
        >
          {data &&
            data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color ? entry.color : COLORS[index]}
              />
            ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
