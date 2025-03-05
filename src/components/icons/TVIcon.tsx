interface Props {
  width: number;
  height: number;
  className?: string;
  isOnline?: boolean;
  legend?: boolean;
}

export default function TVIcon({
  width,
  height,
  className,
  isOnline = false,
  legend = false,
}: Props) {
  if (legend) {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3337 46H40.6671"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.667 22H23.3337C21.8609 22 20.667 23.1939 20.667 24.6667V38C20.667 39.4728 21.8609 40.6667 23.3337 40.6667H44.667C46.1397 40.6667 47.3337 39.4728 47.3337 38V24.6667C47.3337 23.1939 46.1397 22 44.667 22Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (isOnline) {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="68" height="68" rx="24" fill="white" />
        <path
          d="M27.3337 46H40.6671"
          stroke="#7856FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.667 22H23.3337C21.8609 22 20.667 23.1939 20.667 24.6667V38C20.667 39.4728 21.8609 40.6667 23.3337 40.6667H44.667C46.1397 40.6667 47.3337 39.4728 47.3337 38V24.6667C47.3337 23.1939 46.1397 22 44.667 22Z"
          stroke="#7856FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="68" height="68" rx="24" fill="white" />
        <g clipPath="url(#clip0_29919_491)">
          <path
            d="M27.3337 46H40.6671"
            stroke="#F74643"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.667 22H23.3337C21.8609 22 20.667 23.1939 20.667 24.6667V38C20.667 39.4728 21.8609 40.6667 23.3337 40.6667H44.667C46.1397 40.6667 47.3337 39.4728 47.3337 38V24.6667C47.3337 23.1939 46.1397 22 44.667 22Z"
            stroke="#F74643"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.9805 18.5601L25.3317 48.0495"
            stroke="#F74643"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_29919_491">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(18 18)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
