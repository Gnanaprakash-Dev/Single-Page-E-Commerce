import React from "react";
import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";

export default function Banner() {
  return (
    <div className="d-flex">
      <img src={banner1} alt="banner" className="img-fluid w-60" />
      <img src={banner2} alt="banner" className="img-fluid h-100 w-40" />
    </div>
  );
}
