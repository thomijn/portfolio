import React, { Component } from "react";
import PhotoHeader from "./PhotoHeader";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-scroll-parallax";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="headerimg">
            
        </div>


        <Grid container spacing={0}>
          <Parallax className="head" y={[-50, 50]}>
            <Grid class="words" item xs={6}>
              <div class="wrapper">
                <span class="word word1">Thomas</span>
                <span class="word word2">Gertenbach</span>
                <span class="word word3">Portfolio</span>
              </div>
            </Grid>
          </Parallax>
          <Grid item xs={6}>
            <PhotoHeader />
          </Grid>
        </Grid>
        <hr />
        <Typography class="text">
          {" "}
          Do pariatur ex sit consectetur ex dolor laborum enim officia occaecat
          minim esse. Elit Lorem reprehenderit sunt do aliquip. Cillum mollit
          pariatur anim laborum in ullamco sit consequat officia qui. Laborum
          consequat nulla elit aliqua in. Enim laborum consectetur irure et
          elit. Eu occaecat deserunt exercitation ad. Id labore cillum id et
          adipisicing enim anim Lorem Lorem consectetur qui ea pariatur aliquip.
        </Typography>
      </div>
    );
  }
}
