import React from "react";

function Calendar({ setDateValue }) {
  const currentDate = new Date().toISOString().split("T")[0];

  function formatDateForDisplay(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setDateValue(formatDateForDisplay(e.target.value));
          }}
          className="text-black py-1 px-2 w-36 text-center rounded-full"
          type="date"
          name=""
          id=""
          max={currentDate}
        />
      </div>
    </>
  );
}

export default Calendar;
