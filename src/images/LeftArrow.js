import React from "react";

function LeftArrow({ className }) {
  return (
    <svg
      class={className || "w-6 h-6 text-gray-800 dark:text-white"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 5H1m0 0 4 4M1 5l4-4"
      />
    </svg>
  );
}

export default LeftArrow;
