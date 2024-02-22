import "./assets/css/style.css"
import DetailPage from "./pages/detailPage";
import Home from './pages/home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        {/* Define routes using the <Route> component */}
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailPage/>} />
        {/* Define a catch-all route for 404 Not Found */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
