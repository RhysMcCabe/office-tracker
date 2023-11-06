import React, { useState, useEffect } from "react";
import LeftArrow from "../images/LeftArrow";
import RightArrow from "../images/RightArrow";
import BinSVG from "../images/BinSVG";
import { getDatabase, ref, remove } from "firebase/database";

function MyLogs({ user, userData, itemsPerPage = 5 }) {
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState("");
  const [sortedUserData, setSortedUserData] = useState([]);

  useEffect(() => {
    // Sort the userData when it changes
    setSortedUserData(
      userData.slice().sort((a, b) => {
        // Split the strings to extract the date part
        const dateA = new Date(a.split(" - ")[0]);
        const dateB = new Date(b.split(" - ")[0]);
        return dateB - dateA; // Sort in descending order
      })
    );
  }, [userData]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedUserData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedUserData.length / itemsPerPage);

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

  const deleteLog = (uid, date) => {
    const db = getDatabase();
    const logRef = ref(db, `/user/${uid}/${date.replace(/\//g, "")}`);

    // Use the 'remove' function to delete the log entry for the specified date
    remove(logRef)
      .then(() => {
        setDeleteSuccessMessage("Log deleted successfully!");
        // Clear the success message after 5 seconds
        setTimeout(() => {
          setDeleteSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error deleting log:", error);
      });
  };

  return (
    <div>
      <div className="text-sm mt-4 w-fit border-t mx-auto">
        <ul>
          {currentItems.map((item, index) => (
            <div className="grid grid-cols-6 border-b py-2" key={index}>
              <li className="col-span-4">{item}</li>
              <div
                onClick={() => {
                  deleteLog(user?.uid, item.split(" - ")[0]);
                }}
                className="col-span-2 mx-auto my-auto cursor-pointer"
              >
                <BinSVG className={"w-3 h-3"} />
              </div>
            </div>
          ))}
        </ul>
      </div>
      {deleteSuccessMessage && (
        <p className="text-green-500 text-center mt-2">
          {deleteSuccessMessage}
        </p>
      )}
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
