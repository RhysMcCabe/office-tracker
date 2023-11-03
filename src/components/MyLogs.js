import React from "react";

function MyLogs({ userData }) {
  return (
    <div>
      <div className="text-sm pt-6">
        <ul>
          {userData.userData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyLogs;
