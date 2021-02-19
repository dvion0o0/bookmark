import React from 'react'
import "./Cards.scss";
import Card from "./Card"
import Chrome from "../../images/logo-chrome.svg";
import Firefox from "../../images/logo-firefox.svg";
import Opera from "../../images/logo-opera.svg";



const Cards = () => {
    return (
        <section className="cards">
            <div className="container">
            <div className="cards-title">
            <h2>Download the extension</h2>
        <p>We've got more browsers in the pipelin. Please do let us know if you've got a favurite you'd like us yo priortize.</p>
            </div>
            <div className="cards-container">
               <Card img={Chrome} text="Add to Chrome" version="62" />
               <Card img={Firefox} text="Add to Firefox" version="65" />
               <Card img={Opera} text="Add to Opera" version="46" />
            </div>
            </div>
        </section>
    )
}

export default Cards
