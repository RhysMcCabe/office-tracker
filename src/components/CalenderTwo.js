import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CalendarTwo({ setDateValue, dateValue }) {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  // Calculate the first and last day of the current quarter
  const currentYear = currentDate.getFullYear();
  const currentQuarterStartDate = new Date(currentYear, 10, 1); // November is month 10
  const currentQuarterEndDate = new Date(currentYear, 12, 31);

  function formatDateForDisplay(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  useEffect(() => {
    if (dateValue === null) {
      setDateValue(formatDateForDisplay(currentDate));
    }
  }, [dateValue, setDateValue]);

  return (
    <>
      <div>
        <DatePicker
          className="text-zinc-200 bg-zinc-800 text-center font-semibold rounded-full px-2 py-1 w-36"
          selected={date}
          onChange={(date) => {
            if (
              date >= currentQuarterStartDate &&
              date <= currentQuarterEndDate &&
              date.getDay() !== 0 &&
              date.getDay() !== 6
            ) {
              setDate(date);
              setDateValue(formatDateForDisplay(date));
            }
          }}
          dateFormat="dd/MM/yyyy"
          filterDate={(date) => {
            return date.getDay() !== 0 && date.getDay() !== 6;
          }}
          minDate={currentQuarterStartDate}
          maxDate={currentQuarterEndDate}
        />
      </div>
    </>
  );
}

export default CalendarTwo;
