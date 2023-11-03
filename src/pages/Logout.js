import React from "react";

function Logout({ setUser, setUserData }) {
  const signOut = () => {
    setUser(null);
    setUserData(null);
  };
  return (
    <div className="">
      <form onSubmit={signOut}>
        {" "}
        <button type="submit" className="underline text-xs  px-2 py-1">
          Logout
        </button>
      </form>
    </div>
  );
}

export default Logout;
