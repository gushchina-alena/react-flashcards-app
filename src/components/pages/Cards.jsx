import React from "react";
import Card from "../Card";
import "../../assets/styles/Card.css";
import "../../assets/styles/Cards.css";
import { observer, inject } from "mobx-react";
import Loader from "../Loader";

const Cards = inject(["store"]) (
    observer(({ store }) => {
        if (!store.words) return (
            <div className="loadercards-container">
                <Loader />
            </div>
        );
        return (
                <div className="cards">
                    {store.words.map((item) => {
                        return <Card key={item.id} {...item} />
                    })}
                </div>
        );
    })
)

export default Cards;
