import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            src="https://renaudrieux.github.io/cvproject/media/renaud.jpg"
            alt="profil-pic"
          />
          <h3>Renaud RIEUX</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/cvproject" className="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
{/*           <li>
            <NavLink to="/knowledges" className="navActive">
              <i className="fas fa-mountain"></i>
              <span>Knowledges</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" className="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/RenaudRIEUX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/renaud-rieux-8a8918116/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/ThecryptoBonsai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>R. RIEUX - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
