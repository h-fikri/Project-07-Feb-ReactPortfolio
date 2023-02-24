import React from "react";
import "./Footer.css";

export default function index() {
  return (
    <div className="footer text-center">
      <div class="card text-center">
        <div class="card-header">Thank you for visiting my website</div>
        <div class="card-body">
          <h5 class="card-title">
            Made with <span>❤</span> by Husain F Hidayah
          </h5>
          <a
            href="https://github.com/h-fikri/Project-07-Feb-ReactPortfolio/blob/main/public/Husain_Hidayah_CV.pdf"
            class="btn btn-primary"
          >
            Get my CV in PDF format here
          </a>
        </div>
      </div>
    </div>
  );
}
