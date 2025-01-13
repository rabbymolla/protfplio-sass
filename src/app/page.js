"use client";
import AboutItem from "@/Componnent/About";
import Blog from "@/Componnent/Blog/blog";
import Experiance from "@/Componnent/Experiance/experiance";
import HeroPart from "@/Componnent/HeroPart/Hero";
import Layout from "@/Componnent/Layout/Layout";
import Requard from "@/Componnent/Requard/requard";
import Service from "@/Componnent/Services/service";
import Subscribe from "@/Componnent/Subscribe/subscribe";
import Success from "@/Componnent/Sucess/sucess";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          reveal.classList.add("animation");
        } else {
          reveal.classList.remove("animation");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Layout>
        <HeroPart />
        <Success />
        <AboutItem />
        <Service />
        <Experiance />
        <Blog />
        <Requard />
        <Subscribe />
      </Layout>
    </>
  );
}
