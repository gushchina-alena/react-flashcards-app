import React from "react"; 
import loader from "../assets/images/loader.gif";
import "../assets/styles/Cards.css";
import "../assets/styles/Home.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loader} alt="loader" className="loader" />
        </div>
    );
}

export default Loader;
