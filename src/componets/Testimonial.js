import React from "react";
import testiPersion from "../assets/images/testimonial/testi-person.jpg";

export default function Testimonial() {
  return (
    <article>
      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="w-40"></div>
            <div className="w-60 d-flex v-center">
              <div class="heading_s3 text-center">
                <h3>What Client Say .</h3>
              </div>
              <div className="scroll float-right">
                <i className="bi bi-arrow-left-circle"></i>
                <i className="bi bi-arrow-right-circle"></i>
              </div>
              <p>
                “ Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <div className="row v-center">
                <img
                  src={testiPersion}
                  alt="testimonial-persion"
                  className="testi-persion"
                />
                <div className="name">
                  <strong>- Gnanaprakash</strong>
                  <p className="m-0">Value Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
