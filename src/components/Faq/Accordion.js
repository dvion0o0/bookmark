import React, {useState} from "react";
import Arrow from "../../images/icon-arrow.svg";
const Accordion = ({ title, info }) => {
    const [read, setRead] = useState(false)
  return (
    <div className="accordion">
      <h4>{title}</h4>
      <img
        src={Arrow}
        className={`${read ? "arrow read" : "arrow"}`}
        alt="arrow"
        onClick={(e) => setRead(!read)}
      ></img>
      <p>
        {read
          ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis corrupti consectetur est iusto dolorum, doloribus labore suscipit nemo eos odit veniam nulla, beatae et dolor ad voluptatum id deleniti unde."
          : null}
      </p>
    </div>
  );
};

export default Accordion;
