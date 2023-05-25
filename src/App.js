import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  const URL = "http://localhost:4000/";

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching data- stop trying to make fetch happen:", error);
      
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
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
      </header>
    </div>
  );
}

export default App;