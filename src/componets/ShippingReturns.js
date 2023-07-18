import React from "react";
import { shippingReturns } from "../services/api";

export default function ShippingReturns() {
  return (
    <section className="section-y">
      <div className="container">
        <div className="row">
          {shippingReturns.map((data) => (
            <div className="col-3 box-y">
              <div className="d-flex box-container v-center">
                <i className={`bi ${data.icon}`}></i>
                <div className="box-content">
                  <div className="title">{data.title}</div>
                  <p className="m-0">{data.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
