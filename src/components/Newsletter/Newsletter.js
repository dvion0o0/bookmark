import React from 'react'
import { useGlobalContext } from '../context api/context'
import "./Newsletter.scss"
const Newsletter = () => {
const {error, setValue, value, handleSubmit} = useGlobalContext();
    return (
       <section className="newsletter">
           <div className="newsletter-container">
           <h4>35,000 + ALREADY JOINED</h4>
           <h2>Stay up-to-date with what we're doing</h2>
           <form className="form" onSubmit={handleSubmit}>
               <input type="text" placeholder="Enter your email address" value={value} onChange={(e) => setValue(e.target.value)} className={`${error ? 'form-input error' : 'form-input'}`}/>
               <button className="form-btn" type="submit"> contact us</button>
               {error.type ? <small>{error.msg}</small> : null }
           </form>
           </div>
       </section>
    )
}

export default Newsletter
