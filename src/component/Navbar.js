import React, { useEffect, useState } from "react";
import svgicon from "../images/hamb.png";
import "../Css/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [loc, setloc] = useState("/");
  useEffect(() => {
    setloc(location.pathname);
  }, [location]);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
    <div className="Navbar">
      <div className="desktop">
        <ul>
          <li>
            {loc === "/" ? (
              ""
            ) : (
              <Link to="/" className="active">
                Home
              </Link>
            )}
          </li>
          <li>{loc === "/About" ? "" : <Link to="/About">About</Link>}</li>
          <li> {loc === "/Skills" ? "" : <Link to="/Skills">Skills</Link>}</li>
          <li> {loc === "/Certification" ? "" : <Link to="/Certification">Certification</Link>}</li>
          <li>
            {loc === "/Qualification" ? (
              ""
            ) : (
              <Link to="/Qualification">Qualification</Link>
            )}
          </li>
          <li>
            {loc === "/Contact" ? "" : <Link to="/Contact">Contact</Link>}
          </li>
        </ul>
      </div>

      <div className="Hamburger">
        <span className="icon" onClick={toggleNavbar}>
          <img src={svgicon} alt="Hamburger Icon" />
        </span>
      </div>

      {navbar && (
        <div id="sidebar" className="sidebar">
          <span className="sidebar" onClick={toggleNavbar}>
            <span className="closebtn" onClick={toggleNavbar}>
              &times;
            </span>
            {loc === "/" ? "" : <Link to="/">Home</Link>}
            {loc === "/About" ? "" : <Link to="/About">About</Link>}
            {loc === "/Skills" ? "" : <Link to="/Skills">Skills</Link>}
            {loc === "/Certification" ? "" : <Link to="/Certification">Certification</Link>}
            {loc === "/Qualification" ? (
              ""
            ) : (
              <Link to="/Qualification">Qualification</Link>
            )}
            {loc === "/Contact" ? "" : <Link to="/Contact">Contact</Link>}
          </span>
        </div>
      )}

    </div>
   
    </>
  );
}

export default Navbar;
