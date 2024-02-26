import React from "react";
import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import GetStarted from "../../components/GetStarted";
import Hero from "../../components/Hero";

const HomePage = ({ context }) => {
  return (
    <>
      <Hero />
      <AboutUs />
      <GetStarted />
      <ContactUs />
    </>
  );
};

export default HomePage;
