import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footercontent">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" component="h5">
                Social Media
              </Typography>
              <ul>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">Github</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                  <Typography
                    className="copyright"
                    variant="body1"
                    component="body1"
                  >
                    © | Copyright by Thomas Gertenbach
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
