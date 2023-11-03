import "./App.css";
import { useState, useEffect } from "react";
import MainTracker from "./pages/MainTracker";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Heading from "./components/Heading";
import { getDatabase, ref, child, get } from "firebase/database";
import "firebase/database";
import BadgeSVG from "./images/BadgeSVG";
import MyLogs from "./components/MyLogs";
import Donate from "./components/Donate";
import MyStats from "./components/MyStats";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);
  const [erroruserData, setErrorUserData] = useState(null);
  const [showPrevLogs, setShowPrevLogs] = useState(false);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    if (user?.uid) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, "user/" + user?.uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const formattedData = Object.entries(data).map(([date, value]) => {
              const formattedDate = `${date.slice(0, 2)}/${date.slice(
                2,
                4
              )}/${date.slice(4)}`;
              return `${formattedDate} - ${value}`;
            });
            setUserData(formattedData);
          } else {
            setErrorUserData("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      const allowedEmails = process.env.REACT_APP_ALLOWED_EMAILS.split(",");
      if (!allowedEmails.includes(user?.email)) {
        setUser("unauthorized");
      }
    }
  }, [user]);

  return (
    <div className="bg-zinc-800 h-screen text-center pt-12 text-zinc-200">
      {user?.email ? (
        <div className="mb-6">
          <div className="flex gap-1 justify-center">
            <div className="text-lg">{user.displayName}</div>
            <BadgeSVG className={"w-5 h-5 my-auto"} />
          </div>
          <Logout setUser={setUser} setUserData={setUserData} />
        </div>
      ) : (
        <></>
      )}
      <div className=" w-fit mx-auto bg-zinc-900 shadow-lg rounded-2xl p-6">
        <Heading />
        {user === null ? (
          <div className="flex justify-center">
            <Login setUser={setUser} />
          </div>
        ) : (
          <></>
        )}
        {user && user !== "unauthorized" ? (
          <div>
            <MainTracker />
          </div>
        ) : (
          <></>
        )}
        {user === "unauthorized" ? (
          <div className="text-3xl pt-6 text-red-500">Access Denied</div>
        ) : (
          <></>
        )}

        <div className="mt-20  w-fit mx-auto rounded-2xl bg-zinc-900">
          <Donate />
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        {userData.length !== 0 && user ? (
          <div
            className={`mt-12 cursor-pointer px-2 rounded-full ${
              showPrevLogs ? " bg-zinc-600" : ""
            }`}
            onClick={() => {
              setShowPrevLogs(true);
              setShowStats(false);
            }}
          >
            Logs
          </div>
        ) : (
          <></>
        )}

        {userData.length !== 0 && user ? (
          <div
            className={`mt-12 cursor-pointer px-2 rounded-full ${
              showStats ? " bg-zinc-600 " : ""
            }`}
            onClick={() => {
              setShowStats(true);
              setShowPrevLogs(false);
            }}
          >
            My Stats
          </div>
        ) : (
          <></>
        )}
      </div>

      {userData.length !== 0 && showPrevLogs ? (
        <MyLogs userData={{ userData }} />
      ) : (
        <></>
      )}
      {userData.length !== 0 && showStats ? (
        <MyStats userData={{ userData }} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
