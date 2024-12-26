import React from "react";
import Hero from "./components/hero";
import Browsethepage from "./components/Browsethepage";
import Products from "./components/products";
import Slider from "./components/sliderpage";
import Furnirooffuture from "./components/Furnirooffuture";

function Page() {
  return (
    <>
      <Hero />
      <Browsethepage />
      <Products />
      <Slider />
      <Furnirooffuture />
    </>
  );
}

export default Page;
