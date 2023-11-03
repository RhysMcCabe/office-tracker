import "./App.css";
import { useState, useEffect } from "react";
import MainTracker from "./pages/MainTracker";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Heading from "./components/Heading";
import { getDatabase, ref, child, get } from "firebase/database";
import "firebase/database";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [erroruserData, setErrorUserData] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, user?.uid))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
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
      <div className="">
        <Heading />
      </div>

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

      {userData ? (
        <div className="text-3xl pt-6 text-red-500">
          {Object.keys(userData).map((key) => (
            <div key={key}>
              {key}:{" "}
              {Object.keys(userData[key]).map((key2) => (
                <div key={key2}>{userData[key][key2].toString()}</div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="mt-64">
        {" "}
        {user?.email ? (
          <div className="">
            <Logout setUser={setUser} setUserData={setUserData} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
