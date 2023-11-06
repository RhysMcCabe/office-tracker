import React from "react";

function Heading() {
  return (
    <div className="flex gap-4">
      <div className="text-3xl pb-6">Office Tracker</div>
      <div className="animate-pulse text-sm font-semibold bg-orange-500 text-black rounded-2xl h-fit px-1">
        Beta
      </div>
    </div>
  );
}

export default Heading;
