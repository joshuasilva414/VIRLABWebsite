import React from "react";
import Link from "next/link";

function Project(props) {
  return (
    <>
      <div
        class="card"
        style={{
          width: "80rem",
          maxWidth: "90vw",
          height: "auto",
          marginBottom: "50px",
        }}
      >
        <div class="card-body">
          <Link
            href={props.projectLink}
            style={{ marginBottom: "0px", textDecoration: "none" }}
          >
            <h4 class="card-title">{props.title}</h4>
          </Link>
          <p style={{ marginBottom: "0px" }}>
            <b>Agency: </b> {props.agency}
          </p>
          <p style={{ marginBottom: "0px" }}>
            <b>Award: </b> {props.amount}
          </p>
          <p style={{ marginBottom: "0px" }}>
            <b>Investigators: </b> {props.investigators}
          </p>
          <p
            style={{
              marginBottom: "0px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxHeight: "3lh",
            }}
          >
            {" "}
            {props.abstract}
          </p>
        </div>
      </div>
    </>
  );
}
export default Project;
// title, agencyLink, agency, amount, investigators, abstract
