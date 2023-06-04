import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import dotenv from 'dotenv';
dotenv.config();

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar.js'

dotenv.config();

function App() {
  const { user } = useAuthContext()
  const BASE_URL = process.env.REACT_APP_BASE_URL; 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home baseUrl={BASE_URL} /> : <Navigate to="/login" />} 
            /> 
            <Route 
              path="/login" 
              element={!user ? <Login baseUrl={BASE_URL} /> : <Navigate to="/" />} 
            /> 
            <Route 
              path="/signup" 
              element={!user ? <Signup baseUrl={BASE_URL} /> : <Navigate to="/" />} 
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;






