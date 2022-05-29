/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
              <li id="show" className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Shows
                </a>
              </li>
              <li id="people" className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="../html/people.html"
                >
                  People
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Networks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Web Channels
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Countdown
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Forums
                </a>
              </li>
            </ul>
          </div>
        </>
      </nav>
    </>
  );
};


export default Navbar;