import React from "react";
import Header from "../componets/Header";
import Banner from "../componets/Banner";
import ShippingReturns from "../componets/ShippingReturns";
import Ads from "../componets/Ads";
import PopularProducts from "../componets/PopularProducts";
import ProductCategory from "../componets/ProductCategory";
import Testimonial from "../componets/Testimonial";
import Footer from "../componets/Footer";
export default function Home() {
  return (
    <main class="main-content">
      <Header />
      <Banner />
      <ShippingReturns />
      <Ads />
      <PopularProducts />
      <ProductCategory />
      <Testimonial />
      <Footer />
    </main>
  );
}
