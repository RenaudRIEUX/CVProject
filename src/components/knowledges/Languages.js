import React, { Component } from "react";
import Progressbar from "./Progressbar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Java", xp: 0.8 },
      { id: 2, value: "Javascript", xp: 0.7 },
      { id: 3, value: "C", xp: 0.4 },
      { id: 4, value: "SQL", xp: 0.9 },
    ],
    frameworks: [
      { id: 1, value: "Springboot", xp: 0.8 },
      { id: 2, value: "Angular", xp: 0.8 },
      { id: 3, value: "Bootstrap", xp: 0.75 },
      { id: 4, value: "React", xp: 0.65 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <Progressbar
          languages={languages}
          className="languagesDisplay"
          title="Languages"
        />
        <Progressbar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
