"use client";
import HomeComponent1 from "./components/HomeComponent1/HomeComponent1";
import HomeComponent2 from "./components/HomeComponent2/HomeComponent2";
import HomeComponent3 from "./components/HomeComponent3/HomeComponent3";
import HomeComponent4 from "./components/HomeComponent4/HomeComponent4";
import HomeComponent5 from "./components/HomeComponent5/HomeComponent5";
import HomeComponent7 from "./components/HomeComponent7/HomeComponent7";
import HomeComponent8 from "./components/HomeComponent8/HomeComponent8";
import HomeComponent9 from "./components/HomeComponent9/HomeComponent9";

import { useEffect } from "react";
import { useSection } from "./context/SectionContext";

export default function Home() {
  const { section } = useSection();
  useEffect(() => {
    if (section === "about-1" || section === "about-2") {
      document.getElementsByClassName("home-component-1")[0].scrollIntoView({ behavior: "smooth" });
    };
    if (section === "programs-1" || section === "programs-2") {
      document.getElementsByClassName("home-component-5")[0].scrollIntoView({ behavior: "smooth", block: "center" });
    };
  }, [section]);
  return (
    <main>
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent8 />
      <HomeComponent4 />
      <HomeComponent5 />
      <HomeComponent9 />
      <HomeComponent7 />
    </main>
  );
};