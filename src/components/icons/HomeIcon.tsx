interface Props {
  active?: boolean;
}

export default function HomeIcon({ active }: Props) {
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
        d="M15 18C16.2426 18 17.25 16.9926 17.25 15.75C17.25 14.5073 16.2426 13.5 15 13.5C13.7574 13.5 12.75 14.5073 12.75 15.75C12.75 16.9926 13.7574 18 15 18Z"
        className={active ? "stroke-white" : "stroke-menu-active"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 13.9238C8.25 13.493 8.25 13.2776 8.30552 13.0793C8.3547 12.9036 8.43552 12.7383 8.54402 12.5916C8.6665 12.426 8.83652 12.2938 9.17654 12.0293L14.2633 8.073C14.5268 7.86806 14.6585 7.76559 14.804 7.7262C14.9324 7.69145 15.0676 7.69145 15.196 7.7262C15.3415 7.76559 15.4732 7.86806 15.7367 8.073L20.8235 12.0293C21.1635 12.2938 21.3335 12.426 21.456 12.5916C21.5645 12.7383 21.6453 12.9036 21.6945 13.0793C21.75 13.2776 21.75 13.493 21.75 13.9238V19.35C21.75 20.1901 21.75 20.6101 21.5865 20.931C21.4427 21.2132 21.2132 21.4427 20.931 21.5865C20.6101 21.75 20.1901 21.75 19.35 21.75H10.65C9.80992 21.75 9.38988 21.75 9.06901 21.5865C8.78677 21.4427 8.5573 21.2132 8.41349 20.931C8.25 20.6101 8.25 20.1901 8.25 19.35V13.9238Z"
        className={active ? "stroke-white" : "stroke-menu-active"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
