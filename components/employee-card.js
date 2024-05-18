import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Employee(
  props = { image: "/Portrait_Placeholder.png", personal: "/people" }
) {
  return (
    <div
      class="card"
      style={{ width: "18rem", marginRight: "5vw", marginBottom: "5vw" }}
    >
      <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
        <Image
          src={props.image}
          class="card-img-top"
          width={100}
          height={100}
          alt="..."
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      <div class="card-body">
        <Link href={props.personal} style={{ textDecoration: "none" }}>
          <h4 class="card-title">{props.name}</h4>
        </Link>
        <p class="card-text">{props.education}</p>
      </div>
    </div>
  );
}
Employee.defaultProps = {
  image: "/Portrait_Placeholder.png",
  personal: "/people",
};
// name, education, image, personal
