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
        <button
          type="submit"
          className="rounded-full w-36 text-sm bg-zinc-700 hover:bg-zinc-600 px-2 py-1"
        >
          Logout
        </button>
      </form>
    </div>
  );
}

export default Logout;
