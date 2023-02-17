import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Clients from "parts/HomePage/Clients";
import SiteMap from "parts/HomePage/SiteMap";
import Footer from "parts/HomePage/Footer";

import useModalDOM from "helpers/hooks/useModalDOM";


import useScrollAnchor from "helpers/hooks/useScrollAnchor";

export default function HomePage() {
  useScrollAnchor()
  useModalDOM()
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero/>
      <BrowseRoom/>
      <JustArrived/>
      <Clients/>
      <SiteMap/>
      <Footer/>
    </>
  );
}
