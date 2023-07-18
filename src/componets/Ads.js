import React from "react";
import ads1 from "../assets/images/adds/1.png";
import ads2 from "../assets/images/adds/2.webp";
import ads3 from "../assets/images/adds/3.webp";

export default function Ads() {
  return (
    <section className="ads-section">
      <div className="container">
        <div className="row">
          <div className="col-6 relative">
          <span class="overlay">
            <img src={ads1} alt="banner" className="img-fluid h-100" />
            </span>
          </div>
          <div className="col-6">
          <span class="overlay">
            <img
              src={ads2}
              alt="banner"
              className="img-fluid h-100 col-6 mobile-none"
            />
            <img
              src={ads3}
              alt="banner"
              className="img-fluid h-100 col-6 mobile-none"
            />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
