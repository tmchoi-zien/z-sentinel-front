interface Props {
  value: string | number;
  color?: string;
  className?: string;
}

const BG_COLOR = {
  default: "bg-[#7209B7]",
};

export default function Highlighter({ value, color, className }: Props) {
  return (
    <div
      className={`
        ${BG_COLOR["default"]} inline-block py-[3px] px-[10px] rounded-md
        ${className ? className : ""}
      `}
    >
      {value}
    </div>
  );
}
