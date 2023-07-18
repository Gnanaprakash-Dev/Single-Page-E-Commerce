import React from "react";
import { popularProduct } from "../services/api";

export default function PopularProducts() {
  return (
    <section className="best-seller section-y">
      <div className="container">
        <div class="heading_s3 text-center">
          <h3>Popular Products</h3>
        </div>
        <div className="row">
          {popularProduct.map((data) => (
            <div className="col-3 relative cursor-pointer box-y">
              <img src={data.image} alt="best_seller" className="img-fluid" />
              <div className="product-action">
                <i class="bi bi-heart"></i>
                <i class="bi bi-share"></i>
                <i className="bi bi-layers-half"></i>
              </div>
              <div className="cart-btn">
                <button type="button" className="text-uppercase">
                  <i class="bi bi-cart-plus"></i> add to card
                </button>
              </div>
              <div className="product-details">
                <div className="star">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <p className="m-0">{data.name}</p>
                <div className="price">
                  <del>₹ {data.discountPrice}</del> <strong>₹ {data.price}</strong>
                </div>
                <div className="color-bg">
                  <span class="color-red"></span>
                  <span class="color-blue"></span>
                  <span class="color-orange"></span>
                  <span class="color-yellow"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
