import React, { FunctionComponent, useEffect } from "react";

import btn from "../assets/btn.svg";
import { textAnimation } from "../animation/textAnimation";

import { Link } from "react-router-dom";
import Header from "../Component/Header";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  useEffect(() => {
    textAnimation();
  });
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="landing-page">
      <Header />
      <main className="landing-page_body">
        <div className="text">
          <h1 className="ml4">
            <span className="letters letters-1">Playlists</span>
            <span className="letters letters-2">Made</span>
            <span className="letters letters-3">Just</span>
            <span className="letters letters-4">For</span>
            <span className="letters letters-5">You!</span>
          </h1>
        </div>

        <Link to="/pick-playlist">
          <button className="btn">
            <img src={btn} alt="button" />
          </button>
        </Link>
      </main>
      <footer className="footer">C Moody - {year} by Killua & Abdy</footer>
    </div>
  );
};

export default LandingPage;
