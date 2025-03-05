interface Props {
  width: number;
  height: number;
  className?: string;
  isOnline?: boolean;
  legend?: boolean;
}

export default function NVRIcon({
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
        <rect
          x="20"
          y="26.5333"
          width="28"
          height="14.9333"
          rx="1.86667"
          stroke="white"
          strokeWidth="1.49333"
        />
        <rect
          x="23.7334"
          y="32.1334"
          width="10.2667"
          height="3.73333"
          rx="0.466667"
          stroke="white"
          strokeWidth="1.49333"
        />
        <circle cx="43.3332" cy="34" r="1.86667" fill="white" />
        <rect
          x="36.8"
          y="33.2534"
          width="2.8"
          height="1.49333"
          rx="0.746667"
          fill="white"
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
        <rect
          x="20"
          y="26.5333"
          width="28"
          height="14.9333"
          rx="1.86667"
          stroke="#7856FF"
          strokeWidth="1.49333"
        />
        <rect
          x="23.7334"
          y="32.1334"
          width="10.2667"
          height="3.73333"
          rx="0.466667"
          stroke="#7856FF"
          strokeWidth="1.49333"
        />
        <circle cx="43.3332" cy="34" r="1.86667" fill="#7856FF" />
        <rect
          x="36.8"
          y="33.2534"
          width="2.8"
          height="1.49333"
          rx="0.746667"
          fill="#7856FF"
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
        <g clipPath="url(#clip0_29919_497)">
          <rect
            x="20"
            y="26.5333"
            width="28"
            height="14.9333"
            rx="1.86667"
            stroke="#F74643"
            strokeWidth="1.49333"
          />
          <rect
            x="23.7334"
            y="32.1334"
            width="10.2667"
            height="3.73333"
            rx="0.466667"
            stroke="#F74643"
            strokeWidth="1.49333"
          />
          <circle cx="43.3332" cy="34" r="1.86667" fill="#F74643" />
          <rect
            x="36.8"
            y="33.2534"
            width="2.8"
            height="1.49333"
            rx="0.746667"
            fill="#F74643"
          />
          <path
            d="M45.9805 18.5601L25.3317 48.0495"
            stroke="#F74643"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_29919_497">
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
