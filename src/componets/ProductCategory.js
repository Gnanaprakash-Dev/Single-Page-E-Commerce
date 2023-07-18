import React from "react";
import { productCategory } from "../services/api";

export default function ProductCategory() {
  return (
    <section className="pdt-category section-y">
      <div className="container-fluid">
        <div class="heading_s3 text-center">
          <h3>Product Category</h3>
        </div>
        <div className="row h-center v-center">
          {productCategory.map((data) => (
            <div className="col-2 relative">
              <span class="overlay">
                <img
                  src={data.image}
                  alt="product-category"
                  className="img-fluid"
                />
              </span>
              <div class="collection-content d-flex v-center">
                <h4 class="alt-font">{data.name}</h4>
                <span>
                  <span>{data.count} ITEMS</span>
                  <i className="bi bi-arrow-right-circle"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
