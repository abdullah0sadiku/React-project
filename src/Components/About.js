import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container"  id="About">
      <div className="about-background-image-container">
        <img className="rot"src={BannerBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
                  Pinnacle of Perfection
        </h1>
        <p className="primary-text">
        iPhone 15: Elevating standards with unrivaled quality, cutting-edge innovation, and a seamless blend of design and performance. Experience perfection in your palm
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
