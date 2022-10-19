import React from "react";
import heroImage from "../assets/hero-image.png";
import leftHeadingIllustration from "../assets/hero-heading-left-illustration.png";
import rightHeadingIllustration from "../assets/hero-heading-right-illustration.png";
import HeroImageIllustration from "../assets/hero-image-illustration.svg";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="mb-10">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero-inner">
          <div className="relative">
            <img
              className="absolute-tl-center"
              src={leftHeadingIllustration}
              alt=""
            />
            <img
              className="absolute-rb-center"
              src={rightHeadingIllustration}
              alt=""
            />
            <h1>Boost your Marketing and Sales using Technology!</h1>
          </div>
        </div>
      </div>
      <img className="w-full object-fit -mt-20" src={HeroImageIllustration} alt="" />
    </>
  );
}

export default HeroSection;
