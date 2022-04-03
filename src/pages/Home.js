import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Renaud RIEUX</h1>
          <h3>
            IBM consultant with both a backgound in finance and computer science
          </h3>
          <div className="pdf">
            <a
              href="https://renaudrieux.github.io/cvproject/media/RenaudRIEUX_CV.pdf"
              target="_blanc"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
