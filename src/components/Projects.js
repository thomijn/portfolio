import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Typography from "@material-ui/core/Typography";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ProjectCard />
      </div>
    );
  }
}
