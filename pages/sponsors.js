import React from "react";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/page-footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import xilinx from "../public/xilinx.jpeg";
import nsf from "../public/nsf.jpeg";
import utsa from "../public/utsaimage.png";
import sappt from "../public/sappt.jpeg";

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
                <Link class="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/people">
                  People
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="/publications">
                  Publications
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" href="/sponsors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="container "
        style={{ paddingTop: "5vh", display: "flex", flexWrap: "wrap" }}
      >
        <Link
          href="https://utsa.edu"
          style={{ textDecoration: "none", color: "blac" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <Image
              width={100}
              height={100}
              src={utsa}
              style={{ objectFit: "contain" }}
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title text-center ">
                The University of Texas at San Antonio
              </h5>
            </div>
          </div>
        </Link>
        <Link
          href="https://www.nsf.gov/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <Image
              width={100}
              height={100}
              src={nsf}
              style={{ objectFit: "contain" }}
              class="card-img-top"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title text-center">
                The National Science Foundation
              </h5>
            </div>
          </div>
        </Link>

        <div
          class="card"
          style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
        >
          <Image
            width={100}
            height={100}
            src={sappt}
            style={{ objectFit: "contain" }}
            class="card-img-top"
            alt="..."
          />
          <Link
            href="https://campaigns.uthscsa.edu/sappt/?utm_source=event&utm_medium=pres101519&utm_campaign=temp_sappt_jointinitiative"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div class="card-body">
              <h5 class="card-title text-center">
                The San Antonio Partnership for Precision Therapeutics (SAPPT)
              </h5>
            </div>
          </Link>
        </div>

        <Link
          href="https://www.xilinx.com/products/silicon-devices/fpga.html"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
          >
            <Image
              width={100}
              height={100}
              src={xilinx}
              class="card-img-top"
              style={{ objectFit: "contain" }}
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title text-center">Xilinx Inc.</h5>
            </div>
          </div>
        </Link>
      </div>

      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
}
