import React from "react";
import PageContainer from "../components/PageContainer";
import Hero from "../components/home/Hero";
import { CardHoverEffectDemo } from "../components/home/CardHoverEffectDemo";
import TestimonialSection from "../components/home/TestimonialSection";
const HomePage = () => {
  return (
    <PageContainer>
      <Hero />
      <CardHoverEffectDemo />
      <TestimonialSection />
    </PageContainer>
  );
};

export default HomePage;
