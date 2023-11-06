import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

function SendButton({ user, typeValue, dateValue }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function writeNewLog(uid, date, type) {
    const db = getDatabase();

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/user/" + uid + "/" + date.replace(/\//g, "")] = type;

    update(ref(db), updates)
      .then(() => {
        setSuccessMessage("Log updated successfully!");
        // Clear the success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        setErrorMessage(`Error updating log: ${error.message}`);
      });
  }

  return (
    <>
      <button
        onClick={() => {
          writeNewLog(user.uid, dateValue, typeValue);
        }}
        className="border text-zinc-200 rounded-full mt-4 w-36 py-1 px-2 bg-blue-900"
      >
        Submit
      </button>
      <div className="pt-6">
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
}

export default SendButton;
