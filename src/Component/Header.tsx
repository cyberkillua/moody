import React from "react";
import Logo from "../assets/Moody.svg";


export default function Header() {
  return (
    <div>
      <header>
        <img src={Logo} alt="Moody" />
      </header>
    </div>
  );
}
