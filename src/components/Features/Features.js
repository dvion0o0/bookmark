import React, {useState} from 'react'
import "./Features.scss";
import {Data} from "./data";

const Features = () => {
const[value, setValue] = useState(0)
const [data, setData] = useState(Data)
const {img,title, info} = data[value];
console.log(title)
    return (
        <section className="features">
            <div className="container">
            <div className="features-header">
            <h1>Features</h1>
            <p>Our aim is to make it quick and easy for you to acess your favourite websites.
                Your bookmarks sync between your devices so you can acess them on the go.
            </p>
            </div>
            <div className="tabs">
                <div className="underline"></div>
             {Data.map((item, index) => {
                 return(<>
                 <div className="undeline"></div>
                    <button key={index} className={`${value === index ? 'tabs-btn active' : 'tabs-btn'}`} onClick={() => setValue(index)}>{item.name}</button>
                    <div className="underline"></div>
                    </>
                 )
             })}
             </div>
<div className="main-underline"></div>
<div className="features-content">
    <div className="img-container">
        <img src={img} className="feature-img" alt="img"/>
    </div>
    <div className="info">
        <h2>{title}</h2>
        <p>{info}</p>
        <button className="info-btn">More Info</button>
    </div>
</div>
            </div>
        </section>
    )
}

export default Features
