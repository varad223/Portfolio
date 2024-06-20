import React from "react";

const navbar = () => {
  return (
    <>
      <div className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="900">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Project</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default navbar;
