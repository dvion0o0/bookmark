import React,{useState} from 'react'
import "./Faq.scss"
import Data from "./data"
import Accordion from "./Accordion"
const Faq = () => {
    return (
        <section className="Faq">
            <div className="container">
                <div className="Faq-title">
                    <h2>Frequesntly asked questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                </div>
                <div className="accordions">
                {Data.map ((item) => {
                    return (
                        <Accordion key={item.id} {...item}/>
                    )
                })}
                <button className="faq-btn">More Info</button>
                </div>
            </div>
        </section>
    )
}

export default Faq
