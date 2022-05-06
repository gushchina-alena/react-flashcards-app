import React from "react";
import lost from "../../assets/images/404.png";
import "../../assets/styles/NotFound.css";

const Page404 = () => {
    return (
        <div className="not-found">
            <div className="not-found__text">
                <h1 className="not-found__heading">Page Not Found</h1>
                <p className="not-found__body">Looks like you're lost</p>
            </div>

            <div className="not-found__img"><img src={lost} alt="404 image" /></div>
        </div>
    );
}

export default Page404;
