import "../App.css";
import { useState } from "react";
import Calendar from "../components/Calendar";

import SendButton from "../components/SendButton";
import TypeSelect from "../components/TypeSelect";

function MainTracker() {
  const [typeValue, setTypeValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  return (
    <div>
      <Calendar setDateValue={setDateValue} />
      {dateValue ? (
        <div className="pt-6">
          <TypeSelect setTypeValue={setTypeValue} />
        </div>
      ) : (
        <></>
      )}

      {typeValue && dateValue ? (
        <div className="mt-6">
          <SendButton typeValue={typeValue} dateValue={dateValue} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MainTracker;
