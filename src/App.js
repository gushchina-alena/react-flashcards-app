import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components//pages/Home";
import Quiz from "./components/pages/Quiz";
import Cards from "./components/pages/Cards";
import Footer from "./components/Footer";
import Page404 from "./components/pages/Page404";

function App() {
  return (
      <Router>
        <div className="App-container">
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/cards" element={<Cards />}></Route>
              <Route path="/quiz" element={<Quiz />}></Route>
              <Route path="*" element={<Page404 />}></Route>
            </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
