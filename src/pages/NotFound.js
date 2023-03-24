import React from "react";

import Header from "parts/Header";

import Footer from "parts/HomePage/Footer";
import SiteMap from "parts/HomePage/SiteMap";
import PageErrorMessage from "parts/PageErrorMessage";
import Document from "../parts/Document";

export default function Congratulations() {
  return (
    <Document>
      <Header theme="black" />

      <PageErrorMessage />
      <SiteMap />
      <Footer />
    </Document>
  );
}
