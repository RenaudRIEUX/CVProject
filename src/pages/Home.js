import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Renaud RIEUX</h1>
          <h2>Développeur full stack</h2>
          <div className="pdf">
            <a
              href="https://renaudrieux.github.io/cvproject/media/RenaudRIEUX_CV.pdf"
              target="_blanc"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
