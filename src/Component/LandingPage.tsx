import React, { FunctionComponent, useEffect } from "react";
import Logo from "../assets/Moody.svg";
import btn from "../assets/btn.svg";
import Anime, { anime } from "react-anime";

interface LandingPageProps {}

type m14 = any;
const LandingPage: FunctionComponent<LandingPageProps> = () => {
  var ml4: m14 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-4",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-4",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-5",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-5",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 1000,
        delay: 500,
      });
  });

  return (
    <div className="landing-page">
      <header>
        <img src={Logo} alt="Moody" />
      </header>
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
        <div className="btn-container">
          <button className="btn">
            <img src={btn} alt="button" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
