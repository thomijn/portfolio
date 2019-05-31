import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import desk from "../assets/desktop.svg";
import Grid from "@material-ui/core/Grid";
import { Parallax } from "react-scroll-parallax";

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div>
        <Grid className="project" container spacing={5}>
          <Grid className="projecttitle" item xs={6}>
            <Parallax y={[-25, 25]}>
              <Typography variant="h3" component="h3">
                PROJECTS
              </Typography>
              <Typography variant="body1" component="body1">
                cepteur irure Lorem aute ad dolore in nisi magna nisi cupidatat.
                Cupidatat labore sit elit anim laborum. Duis sunt magna aute et
                culpa minim dolore velit et.
              </Typography>
              <Button variant="outlined">Click here to see my projects!</Button>
            </Parallax>
          </Grid>
          <Grid item xs={6}>
            <Parallax y={[25, -25]}>
              <img src={desk} />
            </Parallax>
          </Grid>
        </Grid>
      </div>
    );
  }
}
