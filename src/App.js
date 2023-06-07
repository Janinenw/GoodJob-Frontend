
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import Welcome from './pages/Welcome'  
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Nav.js'
import Signup from './pages/Signup'


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
              element={!user ? <Welcome/> : <Navigate to="/home" />} 
            />
            <Route 
              path="/home" 
              element={user ? <Home baseUrl={BASE_URL} /> : <Navigate to="/" />} 
            /> 
            <Route 
              path="/login" 
              element={!user ? <Login baseUrl={BASE_URL} /> : <Navigate to="/home" />} 
            /> 
            <Route 
              path="/signup" 
              element={!user ? <Signup baseUrl={BASE_URL} /> : <Navigate to="/home" />} 
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;