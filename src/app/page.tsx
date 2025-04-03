"use client"
import Hero from "@/components/home/HomeHero";
import HowItHelps from "@/components/home/HowItHelps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import JoinToday from "@/components/home/JoinToday";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HowItHelps />
      {/* <FutureSection />
      <HowItWorksSection />
      <UserCards />
      <SuccessStoriesSection />
      <CallToActionSection /> */} 
      <WhyChooseUs/>
      <JoinToday/>
     </div>
  );
}