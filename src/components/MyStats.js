import React, { useEffect, useState } from "react";

function MyStats({ userData }) {
  const [inOfficePercentage, setInOfficePercentage] = useState(null);
  const [wfhPercentage, setWfhPercentage] = useState(null);
  const [PtoPercentage, setPtoPercentage] = useState(null);
  useEffect(() => {
    const totalAmount = userData.userData.length;
    const totalPTOAmount = userData.userData.reduce((count, item) => {
      if (item.includes(" - PTO")) {
        return count + 1;
      }
      return count;
    }, 0);
    const officeTotal = userData.userData.reduce((count, item) => {
      if (item.includes(" - Office")) {
        return count + 1;
      }
      return count;
    }, 0);
    const wfhTotal = userData.userData.reduce((count, item) => {
      if (item.includes(" - WFH")) {
        return count + 1;
      }
      return count;
    }, 0);
    if (totalPTOAmount > 0) {
      setPtoPercentage(((totalPTOAmount / totalAmount) * 100).toFixed(2));
    }
    if (officeTotal > 0) {
      setInOfficePercentage(
        ((officeTotal / (totalAmount - totalPTOAmount)) * 100).toFixed(2)
      );
    }
    if (wfhTotal > 0) {
      setWfhPercentage(
        ((wfhTotal / (totalAmount - totalPTOAmount)) * 100).toFixed(2)
      );
    }
  }, [userData]);
  return (
    <div className="pt-6">
      <div className="underline pb-4">Current Quarter: 2023Q4</div>
      <div className="flex justify-center gap-5">
        <div className="text-right w-20">Office:</div>

        <div className="w-20">
          {inOfficePercentage ? <>{inOfficePercentage}%</> : "None"}
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="text-right w-20">WFH:</div>
        <div className="w-20">
          {wfhPercentage ? <>{wfhPercentage}%</> : "None"}
        </div>
      </div>
      <div className="flex justify-center gap-5 border-t-2 w-64 mx-auto mt-6">
        <div className="text-right w-20">PTO:</div>
        <div className="w-20">
          {PtoPercentage ? <>{PtoPercentage}%</> : "None"}
        </div>
      </div>
    </div>
  );
}

export default MyStats;
