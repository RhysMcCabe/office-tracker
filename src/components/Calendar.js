import React from "react";

function Calendar({ setDateValue }) {
  const currentDate = new Date().toISOString().split("T")[0];

  // Calculate the first and last day of the current quarter
  const currentYear = new Date().getFullYear();
  const currentQuarterStartDate = new Date(currentYear, 10, 1); // November is month 10
  const currentQuarterEndDate = new Date(currentYear, 12, 31);

  function formatDateForDisplay(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Helper function to check if a date is a weekday (0 = Sunday, 6 = Saturday)
  function isWeekday(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
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
          min={formatDateForDisplay(currentQuarterStartDate)}
          max={formatDateForDisplay(currentQuarterEndDate)}
          // Use the `disabled` attribute to prevent selection of weekends or dates outside the current quarter
          disabled={(date) => {
            const selectedDate = new Date(date);
            return (
              !isWeekday(selectedDate) ||
              selectedDate < currentQuarterStartDate ||
              selectedDate > currentQuarterEndDate
            );
          }}
        />
      </div>
    </>
  );
}

export default Calendar;
