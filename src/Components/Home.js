import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
                Elevate your mobile experience with the iPhone 15
          </h1>
          <p className="primary-text">
              the perfect blend of style, power, and innovation. It's not just a phone it's a statement. Welcome to the future.
          </p>
          
            <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button>
        
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
