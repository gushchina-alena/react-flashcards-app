import React, { useState, useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Cards from './pages/Cards';
import Footer from './components/Footer';
import Page404 from './pages/Page404';

function App() {
  const [words, setWords] = useState([]);

  useEffect (() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then(response => response.json())
    .then(words => {
      setWords(words)
    })   
  }, [])

  return (
      <Router>
        <div className="App-container">
          <Header />
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route path='/cards' element={<Cards/>}></Route>
              <Route path='/quiz' element={<Quiz/>}></Route>
              <Route path='*' element={<Page404 />}></Route>
            </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
