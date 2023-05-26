import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";

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
      <Home />
    </div>
  );
}

export default App;