import React from "react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return <footer className="footer">C Moody - {year} by Killua & Abdy</footer>;
}
