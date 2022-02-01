import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Context } from './Context';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Cards from './pages/Cards';
import Footer from './components/Footer';

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
    <Context.Provider value={{ words }}>
      <Router>
        <div className="App-container">
          <Header />
            <Switch>
              <main className='main'>
              <Route exact path='/' component={Home}></Route>
              <Route path='/cards' component={Cards}></Route>
              <Route path='/quiz' component={Quiz}></Route>
              </main>
            </Switch>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
