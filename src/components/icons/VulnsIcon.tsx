interface Props {
  active?: boolean;
}

export default function VulnsIcon({ active }: Props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        rx="8"
        className={
          active ? "fill-menu-active opacity-100" : "fill-white opacity-5"
        }
      />
      <circle
        cx="15"
        cy="15"
        r="7.4"
        className={active ? "stroke-white" : "stroke-menu-active"}
        strokeWidth="1.2"
      />
      <rect
        x="14"
        y="11"
        width="2"
        height="5"
        rx="1"
        className={active ? "fill-white" : "fill-menu-active"}
      />
      <rect
        x="14"
        y="17.5"
        width="2"
        height="2"
        rx="1"
        className={active ? "fill-white" : "fill-menu-active"}
      />
    </svg>
  );
}
