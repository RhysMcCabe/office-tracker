import React, { useState } from "react";
import LeftArrow from "../images/LeftArrow";
import RightArrow from "../images/RightArrow";

function MyLogs({ userData, itemsPerPage = 5 }) {
  const reversedUserData = userData.userData.slice().reverse();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reversedUserData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(reversedUserData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="text-sm pt-4 h-32">
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="pagination flex justify-center my-2">
        <div className="px-4">
          {currentPage > 1 && (
            <button onClick={prevPage}>
              <LeftArrow />
            </button>
          )}
        </div>
        <div className="px-4">
          {currentPage < totalPages && (
            <button onClick={nextPage}>
              <RightArrow />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyLogs;
