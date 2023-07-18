import React from "react";
import footerLogo from "../assets/images/footer/footer-logo.png";
import payment from "../assets/images/footer/payment-methods.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-4">
              <div className="about">
                <div className="logo v-center">
                  <img src={footerLogo} alt="fashion_logo" className="logo" />
                  <h2>fashion</h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <div className="row">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-youtube"></i>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="main-menu">
                <h3>Main Menu</h3>
                <ul>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Couple</li>
                  <li>Family</li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <h3>Useful Links</h3>
              <ul>
                <li>About us</li>
                <li>New Arrivals</li>
                <li>Best sellers</li>
                <li>Latest news</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Store Information</h3>
              <ul>
                <li>
                  <i className="bi bi-geo-alt"></i> 5/349 kattur amani
                  kondalampatti, salem-636010.
                </li>
                <li>
                  <i className="bi bi-telephone"></i> +91 9080835343
                </li>
                <li>
                  <i className="bi bi-envelope"></i> salemprakash921@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex">
          <img src={payment} alt="payment-option" className="payment" />
          <span>Copyright © 2023 Fashion. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
