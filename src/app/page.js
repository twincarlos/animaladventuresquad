"use client";
import HomeComponent1 from "./components/HomeComponent1/HomeComponent1";
import HomeComponent2 from "./components/HomeComponent2/HomeComponent2";
import HomeComponent3 from "./components/HomeComponent3/HomeComponent3";
import HomeComponent4 from "./components/HomeComponent4/HomeComponent4";
import HomeComponent5 from "./components/HomeComponent5/HomeComponent5";
import HomeComponent6 from "./components/HomeComponent6/HomeComponent6";
import HomeComponent7 from "./components/HomeComponent7/HomeComponent7";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (href === "about") {
      document.getElementsByClassName("home-component-2")[0].scrollIntoView({ behavior: "smooth", block: "center" });
    };
    if (href === "programs") {
      document.getElementsByClassName("home-component-5")[0].scrollIntoView({ behavior: "smooth", block: "center" });
    };
  }, []);
  return (
    <main>
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 />
      <HomeComponent5 />
      <HomeComponent6 />
      <HomeComponent7 />
    </main>
  );
};