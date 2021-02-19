import React from 'react'
import HeroImg from "../../images/illustration-hero.svg";
import "./Hero.scss"
const Hero = () => {
    return (
        <header>
            <div className="container header-center">
                <div className="img-container">
            <img src={HeroImg} alt="heroimg" className="hero"/>
                </div>
            <div className="hero-content">
                <h1>A simple bookmark manager</h1>
                <p>A clean and simple interface to organize your favourite websites.
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="btns">
                <button className="hero-btn">get it on chrome</button>
                <button className="hero-btn hero-btn-2">get it on firefox</button>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Hero
