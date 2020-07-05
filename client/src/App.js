import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>

 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/">Home</Link>
        <Link to="/otherPage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib}/>
        <Route exact path="/otherPage" component={OtherPage}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
