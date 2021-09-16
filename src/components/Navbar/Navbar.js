import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { header } from "../doc"

const Navbar = () => {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="row">
          <div className="text-center p-3 header">
      <img
        src={header.headerTop}
        alt=""
      />
    </div>
          </div>
          {/* <!--/row--> */}
        </div>
        {/* <!--container--> */}
      </div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container">
        <div class="logo">
        <img
        src={header.headerNav}
        width="90px"
        height="75px"
        alt=""
      />
      </div>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav ml-auto nav-navig">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Our Team
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/projects" class="nav-link">
                  KU Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" >
                  KU Inspirations
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Collaborations
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Donate
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
