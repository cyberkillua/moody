import React, { FunctionComponent } from "react";
import Logo from "../assets/Moody.svg";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <div className="landing-page">
      <header>
        <img src={Logo} alt="Moody" />
      </header>
      <main className="landing-page_body">
        <h3>create your playlist</h3>
      </main>
    </div>
  );
};

export default LandingPage;
