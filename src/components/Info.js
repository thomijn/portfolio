import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import me from "../assets/thomas.jpg";
import SkillBar from "react-skillbars";
import api from "../assets/api.svg";
import { Parallax } from "react-scroll-parallax";

const skills = [
  { type: "Html & Css", level: 95 },
  { type: "Javascript", level: 80 },
  { type: "UX Design", level: 90 },
  { type: "ReactJS", level: 65 },
  { type: "Angular", level: 30 },
  { type: "PHP", level: 70 }
];

const colors = {
  bar: "#9bc5de",
  title: {
    text: "#585858",
    background: "#fff"
  }
};

export default class Info extends Component {
  render() {
    return (
      <div className="about">
        <Parallax className="parbetween" x={[0, -5]}>
          <Grid container spacing={0} justify="center">
            <Grid className="me" item xs={6}>
              <img src={me} width="400" height="400" />
            </Grid>
            <Grid className="me" item xs={6}>
              <Typography className="text" variant="h1">
                ABOUT ME
              </Typography>
              <Typography variant="p" component="p">
                Id cillum veniam ipsum et. Duis laboris duis exercitation
                pariatur sint sint reprehenderit. Et reprehenderit Lorem in
                consequat nisi ullamco occaecat cillum cillum. Amet magna quis
                adipisicing consequat irure proident veniam. Cupidatat eiusmod
                pariatur sint ullamco irure duis voluptate magna elit.
              </Typography>
            </Grid>
          </Grid>
        </Parallax>
        <Parallax className="parbetween" x={[-5, 0]}>
          <Grid className="skill" container spacing={0}>
            <Grid className="skilltitle" item xs={6}>
              <Typography variant="h3" component="h3">
                SKILLS
              </Typography>
              <Typography variant="p" component="p">
                Id cillum veniam ipsum et. Duis laboris duis exercitation
                pariatur sint sint reprehenderit.
              </Typography>
            </Grid>
            <Grid className="skills" item xs={6}>
              <SkillBar
                animationDuration={2000}
                height={"35px"}
                skills={skills}
                colors={colors}
              />
            </Grid>
          </Grid>
        </Parallax>
      </div>
    );
  }
}
