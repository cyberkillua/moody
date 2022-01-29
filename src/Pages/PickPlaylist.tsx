import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import gsap from "gsap";

export default function PickPlaylist() {
 
  // useEffect(() => {
  //   gsap.to('.pick-playlist-container', 0, { css: { visibility: "visible" } });
  // }, []);

  return (
    <div  className="pick-playlist-container">
      <Header />
      <main className="container">
        <h1 className="container-header">Pick your preferred playlist</h1>
      </main>
      <Footer />
    </div>
  );
}
