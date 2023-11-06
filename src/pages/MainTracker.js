import "../App.css";
import SendButton from "../components/SendButton";
import TypeSelect from "../components/TypeSelect";
import CalendarTwo from "../components/CalenderTwo";

function MainTracker({
  dateValue,
  setDateValue,
  typeValue,
  setTypeValue,
  user,
  setUserData,
}) {
  return (
    <div>
      <CalendarTwo setDateValue={setDateValue} dateValue={dateValue} />
      {dateValue ? (
        <div className="pt-6">
          <TypeSelect setTypeValue={setTypeValue} />
        </div>
      ) : (
        <></>
      )}

      {typeValue && dateValue ? (
        <div className="mt-6">
          <SendButton user={user} typeValue={typeValue} dateValue={dateValue} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MainTracker;
