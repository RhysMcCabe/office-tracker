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
    <div className="bg-zinc-800 h-screen text-center pt-12 text-zinc-200 shadow-lg">
      {user?.email ? (
        <div className="mb-6">
          <Logout setUser={setUser} setUserData={setUserData} />
        </div>
      ) : (
        <></>
      )}
      <div className=" w-fit mx-auto bg-zinc-900 rounded-2xl p-6">
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
        {userData ? (
          <div className="text-sm pt-6 ">
            {Object.keys(userData).map((key) => (
              <div key={key}>
                {key}:{" "}
                {Object.keys(userData[key]).map((key2) => (
                  <span key={key2}>{userData[key][key2].toString()}</span>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}{" "}
        <div className="mt-20  w-fit mx-auto rounded-2xl bg-zinc-900">
          <stripe-buy-button
            buy-button-id="buy_btn_1O8CR9R1MgaUczlogYpaFDX8"
            publishable-key="pk_test_51MoDkyR1MgaUczloCxubf6C6EJvd844xu2J7mibPXVo4kVUxRLo7RWAFJVmugVRmaVN0yYqmoUiKwFowi61Lnz9D00faQZUP2D"
          ></stripe-buy-button>
          <div className="text-zinc-300 text-sm font-semibold">
            toward server costs
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
