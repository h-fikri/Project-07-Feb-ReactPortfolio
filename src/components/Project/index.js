import React from "react";
import "./index.css";

export default function index() {
  return (
    <>
      <div className="container">
        <div className="card-group">
          <div className="card">
            <a
              href="https://h-fikri.github.io/Project-04-Nov-Bootstrap-Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="imgtop">
                <img
                  className="card-img-top img-fluid"
                  src="https://logo-download.com/wp-content/data/images/svg/Bootstrap-logo.svg"
                  alt=""
                />
              </div>
            </a>
            <div className="card-body">
              <h5 className="card-title">Bootstrap Portfolio</h5>
              <p className="card-text">
                This personal portfolio project built with Bootstrap showcases
                the skills, experience, and work of me. With a modern design and
                a full-screen background image, the website features three
                sections highlighting the developer's skills, experience, and
                projects.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Project Main Technology: Bootstrap
              </small>
            </div>
          </div>

          <div className="card">
            <a
              href="https://h-fikri.github.io/Project-03-Jan-Forecast/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="imgtop">
                <img
                  className="card-img-top img-fluid"
                  src="https://www.jqueryscript.net/images/Creating-A-Nice-Weather-App-with-jQuery-Canvas.jpg"
                  alt=""
                />
              </div>
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Forecast</h5>
              <p className="card-text">
                This weather forecast website is a responsive platform created
                to showcase my skills in web development. Using jQuery and
                JavaScript, the website provides up-to-date weather information
                for any city across the globe.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Project Main Technology: API Integration
              </small>
            </div>
          </div>

          <div className="card">
            <a
              href="https://husainreactportfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="imgtop">
                <img
                  className="card-img-top img-fluid"
                  src="https://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png"
                  alt=""
                />
              </div>
            </a>
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">
                This portfolio website is a responsive platform built with
                ReactJS, designed to showcase my skills as a web developer. The
                website has a modern and minimalist design, with a full-screen
                background image and a navigation menu at the top.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Project Main Technology: React JS
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
