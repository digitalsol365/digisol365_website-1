"use client";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "../context/ThemeContext";
import FloatingButton from "@/components/FloatingButton";
import Sidebar from "@/components/Sidebar";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSolutions from "@/components/ServiceSolutions";
import WhatWeDo from "@/components/WhatWeDo";
import OurNetwork from "@/components/OurNetwork";
import SuccessStories from "@/components/SuccessStories";
import ReviewSection from "@/components/ReviewSection";
import { ProfileCard } from "@/components/OurExperts";
import Footer from "@/components/Footer";

export default function Home() {
  const { state } = useTheme();

  return (
    <div
      className={`${
        state.theme === "dark" ? "dark" : ""
      } max-h-[100vh] transition-all duration-500 ease-in-out`}
    >
      <FloatingButton />

      <div className="flex">
        {/* Sidebar Section */}
        <Sidebar />

        {/* Main Content Section */}
        <div className="w-[92%] ml-[8%] bg-background dark:bg-foreground text-foreground dark:text-background transition-all duration-500 ease-in-out ">
          <HeroSection />
          <WhoWeAre />
          <ServicesSolutions />
          <WhatWeDo />
          <OurNetwork />
          <SuccessStories />
          <ReviewSection />
          <ProfileCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}
