import React from "react";
import "./Footer.css";

export default function index() {
  return (
    <div className="footer text-center">
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">
            Made with <span>❤</span> by Husain F Hidayah
          </h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" class="btn btn-primary">
            Get my resume in PDF format here
          </a>
        </div>
      </div>
    </div>
  );
}
