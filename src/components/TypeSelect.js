import React from "react";

function TypeSelect({ setTypeValue }) {
  return (
    <>
      <select
        onChange={(e) => {
          setTypeValue(e.target.value);
        }}
        className="text-zinc-200 bg-zinc-800 font-semibold text-center rounded-full px-2 py-1 w-36"
        name=""
        id=""
      >
        <option disabled selected value="">
          Select...
        </option>
        <option value="Office">Office</option>
        <option value="WFH">WFH</option>
        <option value="PTO">PTO</option>
      </select>
    </>
  );
}

export default TypeSelect;
