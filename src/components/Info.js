import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

export default class Info extends Component {
  render() {
    return (
      <div className="about">
        <Typography className="text" variant="p">
          ABOUT ME
        </Typography>
      </div>
    );
  }
}
