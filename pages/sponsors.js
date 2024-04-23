import React from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/page-footer";
import Head from "next/head";
export default function Sponsors() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="bootstrap.css" />
        <link rel="stylesheet" href="carousel.css" />
      </Head>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <h1 style={{ color: "white" }}>VIR LAB</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/people">
                  People
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="/publications">
                  Publications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/sponsors">
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="container "
        style={{ paddingTop: "5vh", display: "flex", flexWrap: "wrap" }}
      >
        <a
          href="https://utsa.edu"
          style={{ textDecoration: "none", color: "blac" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <img src="/utsaimage.png" class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title text-center ">
                The University of Texas at San Antonio
              </h5>
            </div>
          </div>
        </a>
        <a
          href="https://www.nsf.gov/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <img src="/nsf.jpeg" class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title text-center">
                The National Science Foundation
              </h5>
            </div>
          </div>
        </a>

        <div
          class="card"
          style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
        >
          <img src="/sappt.jpeg" class="card-img-top" alt="..." />
          <a
            href="https://campaigns.uthscsa.edu/sappt/?utm_source=event&utm_medium=pres101519&utm_campaign=temp_sappt_jointinitiative"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div class="card-body">
              <h5 class="card-title text-center">
                The San Antonio Partnership for Precision Therapeutics (SAPPT)
              </h5>
            </div>
          </a>
        </div>

        <a style={{ textDecoration: "none", color: "black" }}>
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <img src="/xilinx.jpeg" class="card-img-top" alt="..." />

            <div class="card-body">
              <h5 class="card-title text-center">Xilinx Inc.</h5>
            </div>
          </div>
        </a>
      </div>

      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}
