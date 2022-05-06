import React from "react";
import "../../assets/styles/Home.css";
import WordsTable from "../WordsTable";
import { observer, inject } from "mobx-react";
import Loader from "../Loader";

const Home = inject (["store"]) (
    observer(({ store }) => {
        return (
            <>
                {store.words?
                    <WordsTable />
                :
                    <div className="loaderhome-container"><Loader /></div>
                }
            </>
        );
    })
)

export default Home;
