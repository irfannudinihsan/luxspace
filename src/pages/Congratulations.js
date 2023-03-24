import React from "react";

import { Link } from "react-router-dom";

import Header from "parts/Header";
import BreadCrumb from "components/Breadcrumb";
import Footer from "parts/HomePage/Footer";
import SiteMap from "parts/HomePage/SiteMap";
import Document from "../parts/Document";

// import ShippingCart from "parts/Cart/ShippingCart";
// import ShippingDetails from "parts/Cart/ShippingDetails";

export default function Congratulations() {
  return (
    <Document>
      <Header theme="black" />

      <BreadCrumb
        list={[
          { url: "/", name: "home" },
          { url: "/congratulation", name: "Success Checkout" },
        ]}
      />

      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img
                src="/images/content/illustration-success.png"
                alt="congrats illustration"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Ah yes it’s success!
              </h2>
              <p className="text-lg mb-12">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>

              <Link
                to={"/"}
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>

        <SiteMap />
        <Footer />
      </section>
    </Document>
  );
}
