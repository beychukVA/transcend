import React from "react";

const ArrowDown = ({ color = "#040707" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_95_1186)">
        <path
          d="M12 15L7.757 10.757L9.172 9.34302L12 12.172L14.828 9.34302L16.243 10.757L12 15Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_95_1186">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDown;
