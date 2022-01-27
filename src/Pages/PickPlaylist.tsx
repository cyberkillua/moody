import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

export default function PickPlaylist() {
  return (
    <div className="pick-playlist-container">
      <Header />
      <main className="container">
        <h1 className="container-header">Pick your preferred playlist</h1>
      </main>
      <Footer />
    </div>
  );
}
