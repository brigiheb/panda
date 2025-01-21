import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import LastSection from "./LastSection";
import Footer2 from "./Footer2";
import FooterTop from "./FooterTop";


const ResellerPage = () => {
  return (
    <div
      className="reseller-page"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroSection />

      <div
        className="content-wrapper"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        {/* Sidebar - Stays Fixed */}
        <div
          className="sidebar-wrapper"
          style={{
            width: "300px",
            position: "sticky",
            top: "100px",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Section1 />
          <Section2 />
          <Section3/>

          {/* Add More Sections as Needed */}
        </div>
        
      </div>
      <LastSection />
      <FooterTop />
      <Footer2 />

    </div>
  );
};

export default ResellerPage;
