

// import React, { useState, useEffect, createContext } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Jobs from './pages/Jobs'

// export const UserContext = createContext(null);

// function App() {
//   const [user, setUser] = useState(null);
//   const URL = "http://localhost:4000/";

//   const fetchData = async () => {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


//   return (
//     <div className="App">
//       <UserContext.Provider value={{ user, setUser }}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/jobs" element={<Jobs />} />
//           </Routes>
//         </Router>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from './pages/Jobs'

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const URL = "http://localhost:4000/";

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Log user when it changes
  useEffect(() => {
    if (user && user.id) {
      console.log(user.id);
    }
  }, [user]);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;