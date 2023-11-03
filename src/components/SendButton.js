import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function SendButton({ typeValue, dateValue }) {
  const [openConfirmLog, setIsConfirmLogOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsConfirmLogOpen(true);
        }}
        className="border rounded-full w-36 py-1 px-2 hover:bg-blue-600"
      >
        Submit
      </button>

      <ConfirmModal
        formId={"submit-office-log"}
        header={`Submit log for ${dateValue}`}
        body={`${typeValue}`}
        dismissText={"Go back"}
        open={openConfirmLog}
        setOpen={setIsConfirmLogOpen}
        submitText={"Submit log"}
      />
    </>
  );
}

export default SendButton;
