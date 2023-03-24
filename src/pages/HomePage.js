import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Clients from "parts/HomePage/Clients";
import SiteMap from "parts/HomePage/SiteMap";
import Footer from "parts/HomePage/Footer";

import Document from "../parts/Document";

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </Document>
  );
}
