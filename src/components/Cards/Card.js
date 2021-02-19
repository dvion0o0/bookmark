import React from 'react'
import Dots from "../../images/bg-dots.svg";
import "./Cards.scss";
const Card = ({img,text, version}) => {
    return (
       <article className="card">
           <img src={img} alt="text"/>
           <h1>{text}</h1>
           <h4>Minimum version {version}</h4>
           <img src={Dots} alt="dots"/>
           <button className="card-btn">Add & Install Extension</button>
       </article>
    )
}

export default Card
