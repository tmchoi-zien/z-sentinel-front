interface Props {
  active?: boolean;
}

export default function SecurityAlertsIcon({ active }: Props) {
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
      <path
        d="M15 7.5C15 7.5 13.54 10.9622 9 10.3014V17.2297C9.118 17.6311 8.594 20.8865 15 22.5C21.406 20.8865 20.882 17.6311 21 17.2297V10.3014C16.46 10.9622 15 7.5 15 7.5Z"
        className={active ? "stroke-white" : "stroke-menu-active"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.275L14.75 17.4103V17.4125L17.9 14.15"
        className={active ? "stroke-white" : "stroke-menu-active"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
