import React from "react";

function StatsSVG({ className }) {
  return (
    <svg
      class={className || "w-6 h-6 text-gray-800 dark:text-white"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"
      />
    </svg>
  );
}

export default StatsSVG;
