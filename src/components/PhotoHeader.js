import React, { Component } from "react";
import portrat from "../assets/thomas.jpg";

export default class PhotoHeader extends Component {
  render() {
    return (
      <div>
        <div className="photo">
          <img src={portrat} />
        </div>
      </div>
    );
  }
}
