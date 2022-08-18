import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
// import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <div className="toggleButton">
        <button>
          {/* <ReorderIcon fontSize="inherit" style={{ fontSize: "200px" }} /> */}
        </button>
      </div>
      <div className="links">
        <Link to="/home">Home</Link> | <Link to="/projects">Projects</Link> |{" "}
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
