import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import PickPlaylist from "./Component/PickPlaylist";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

function App() {
  const onEnter = (node: any) => {
    gsap.from([node.children[0]], 0.3, {
      x: 300,
      delay: 0.2,
      ease: "Power3.easeOut",
      opacity: 0,
      stagger: {
        amount: 0.2,
      },
    });
  };

  const onExit = (node: any) => {
    gsap.to([node.children[0]], 0.3, {
      x: -300,
      ease: "Power3.easeOut",
      stagger: {
        amount: 0.2,
      },
    });
  };

  type match = any;
  const routes = [
    { path: "/", name: "LandingPage", Component: LandingPage },
    { path: "/pick-playlist", name: "PickPlaylist", Component: PickPlaylist },
  ];
  return (
    <div className="container">
      {routes.map(({ path, Component }) => (
        <Route path={path} key={path} exact>
          {({ match }: match) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              onExit={onExit}
              onEntering={onEnter}
              unmountOnExit
              // nodeRef={nodref}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
}

export default App;
