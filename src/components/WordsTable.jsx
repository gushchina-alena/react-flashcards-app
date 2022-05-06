import React from "react";
import "../assets/styles/Home.css";
import Word from "../components/Word";
import homePic from "../assets/images/1.png";
import { observer, inject } from "mobx-react";

const WordsTable = inject(["store"]) (
    observer(({ store }) => {
        return (
            <div className="home-container">
                    <table border="1" className="table">
                        <thead className="table__heading-row">
                            <tr>
                                <th>Word</th>
                                <th>Transcription</th>
                                <th>Translation</th>
                                <th colSpan="2">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.words.map((item) => {
                                return <Word key={item.id} {...item} />
                            })}
                        </tbody>
                    </table>
                    <img src={homePic} className="table__img" />
            </div>
        );
    })
);

export default WordsTable;
