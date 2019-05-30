import React from "react";
import "./App.css";
import Info from "./components/Info";
import coding from "./assets/coding.svg";
import api from "./assets/api.svg";
import css from "./assets/css.svg";
import develop from "./assets/develop.svg";
import uix from "./assets/uix.svg";
import browser from "./assets/browser.svg";
import { Parallax } from "react-scroll-parallax";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="headerimg">
              <Parallax y={[-500, 150]}>
                <img class="image-1" src={coding} />
              </Parallax>
              <Parallax y={[-120, 90]}>
                <img class="image-2" src={api} />
              </Parallax>
              <Parallax y={[-90, 70]}>
                <img class="image-3" src={develop} />
              </Parallax>
              <Parallax y={[-80, 80]}>
                <img class="image-4" src={uix} />
              </Parallax>
              <Parallax y={[-100, 100]}>
                <img class="image-5" src={css} />
              </Parallax>
              <Parallax y={[-60, 60]}>
                <img class="image-6" src={browser} />
              </Parallax>
            </div>

            <Parallax y={[-60, 100]}>
              <div className="wrapper">
                <span className="word word1">Thomas</span>
                <span className="word word2">Gertenbach</span>
                <span className="word word3">I design and build</span>
                <span className="word word3">user interfaces</span>
              </div>
            </Parallax>
          </Grid>
        </Grid>
      </div>
      <Info />
    </div>
  );
}

export default App;
