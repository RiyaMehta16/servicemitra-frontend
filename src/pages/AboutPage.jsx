import React from "react";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import StickyScrollDemo from "../components/about/StickyScrollDemo";
import Faq from "../components/about/Faq";

const AboutPage = () => {
  return (
    <PageContainer>
      <StickyScrollDemo />
      <Faq />
    </PageContainer>
  );
};

export default AboutPage;
