import React from "react";

import Header from "parts/Header";

import BreadCrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

// import Clients from "parts/HomePage/Clients";
import SiteMap from "parts/HomePage/SiteMap";
import Footer from "parts/HomePage/Footer";

export default function details() {
  return (
    <>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion/>
      {/* <Clients /> */}
      <SiteMap />
      <Footer />
    </>
  );
}
