"use client"
import CoFounderHero from "@/components/co-founder/CoFounderHero";
import WhyCoFounderMatters from "@//components/co-founder/WhyCoFounderMatters";
import GreatCoFounderQualities from "@/components/co-founder/GreatCoFounderQualities";
import MatchingProcess from "@/components/co-founder/MatchingProcess";
import CoFounderTypes from "@/components/co-founder/CoFounderTypes";
import WhyChooseUs from "@/components/co-founder/WhyChooseUs";
import SuccessStories from "@/components/co-founder/SuccessStories";
import CallToAction from "@/components/co-founder/CallToAction";

import React from "react";

export default function cofounderPage() {
  return (
    <div>
      <CoFounderHero />
      <WhyCoFounderMatters /> 
      <GreatCoFounderQualities />
      <MatchingProcess />
      <CoFounderTypes />
      <WhyChooseUs />
      <SuccessStories />
      <CallToAction />
      
     </div>
  );
}