import React from "react";
import GiftSVG from "../images/GiftSVG";

function Donate() {
  return (
    <a href="https://donate.stripe.com/test_eVacO7ago1KOb4Y6oq" target="_blank">
      <GiftSVG className={"text-blue-400 animate-pulse w-6 h-6 mx-auto"} />
    </a>
  );
}

export default Donate;
