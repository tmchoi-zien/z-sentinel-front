export default function AlertIcon({ ...rest }) {
  return (
    <div {...rest}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="60" rx="15" fill="#FF814B" />
        <path
          d="M30 35V30M30 25H30.0125M42.5 30C42.5 36.9036 36.9036 42.5 30 42.5C23.0964 42.5 17.5 36.9036 17.5 30C17.5 23.0964 23.0964 17.5 30 17.5C36.9036 17.5 42.5 23.0964 42.5 30Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
