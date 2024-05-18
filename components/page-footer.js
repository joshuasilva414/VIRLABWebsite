import React from "react";
import Image from "next/image";
import { basePath } from "../next.config";

function Footer() {
  return (
    <>
      <footer class="bg-dark text-center text-white">
        <div style={{ paddingTop: "40px" }}>
          <b>
            <p>Copyright © VIRLab 2023</p>
          </b>
        </div>

        <div style={{ paddingBottom: "50px" }}>
          <Image
            src={basePath + "/VIRLABLOGO.png"}
            alt="Image 1"
            width={100}
            height={100}
            style={{
              height: "auto",
              padding: "10px",
              border: "solid white 2px ",
              borderRadius: "5px",
            }}
          />
          <Image
            src={basePath + "/utsaimage.png"}
            alt="Image 2"
            width={100}
            height={100}
            style={{ paddingLeft: "25px", height: "auto" }}
          />
        </div>
      </footer>
    </>
  );
}
export default Footer;
