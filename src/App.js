import React, { Component } from "react";
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
import Button from "@material-ui/core/Button";

import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: window.innerHeight };
    this.myRef = React.createRef(); // Create a ref object
  }
  ";";

  scrollToMyRef = () => {
    window.scrollTo(0, this.myRef.current.offsetTop);
  };
  // run this method to execute scrolling.

  render() {
    console.log(this.state.height);

    return (
      <div className="App">
        <div className="header">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <div className="headerimg">
                <Parallax y={[-500, 150]}>
                  <img className="image-1" src={coding} />
                </Parallax>
                <Parallax y={[-120, 90]}>
                  <img className="image-2" src={api} />
                </Parallax>
                <Parallax y={[-90, 90]}>
                  <img className="image-3" src={develop} />
                </Parallax>
                <Parallax y={[-80, 80]}>
                  <img className="image-4" src={uix} />
                </Parallax>
                <Parallax y={[-100, 100]}>
                  <img className="image-5" src={css} />
                </Parallax>
                <Parallax y={[-60, 60]}>
                  <img className="image-6" src={browser} />
                </Parallax>
              </div>

              <Parallax y={[-60, 100]}>
                <div className="wrapper">
                  <span className="word word1">Thomas</span>
                  <span className="word word2">Gertenbach</span>
                  <span className="word word3">I design and build</span>
                  <span className="word word3">user interfaces</span>
                  <Button onClick={this.scrollToMyRef} variant="outlined">
                    Click here to get to know me!
                  </Button>
                </div>
              </Parallax>
            </Grid>
          </Grid>
        </div>
        <div ref={this.myRef}>
          <Info />
        </div>
        <Projects />
        <Footer />
      </div>
    );
  }
}
