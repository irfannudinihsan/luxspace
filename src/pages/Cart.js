import React from "react";

import Header from "parts/Header";
import BreadCrumb from "components/Breadcrumb";
import Footer from "parts/HomePage/Footer";
import SiteMap from "parts/HomePage/SiteMap";

import ShippingCart from "parts/Cart/ShippingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import useScrollToTop from "helpers/hooks/useScrollToTop";
import Document from "../parts/Document";

export default function Cart() {
  useScrollToTop();
  return (
    <Document>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShippingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </Document>
  );
}
