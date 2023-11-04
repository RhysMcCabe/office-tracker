import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

function SendButton({ user, typeValue, dateValue }) {
  function writeNewPost(uid, date, type) {
    const db = getDatabase();

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates["/user/" + uid + "/" + date.replace(/\//g, "")] = type;

    return update(ref(db), updates);
  }

  return (
    <>
      <button
        onClick={() => {
          writeNewPost(user.uid, dateValue, typeValue);
        }}
        className="border text-zinc-200 rounded-full mt-4 w-36 py-1 px-2 bg-blue-900"
      >
        Submit
      </button>
    </>
  );
}

export default SendButton;
