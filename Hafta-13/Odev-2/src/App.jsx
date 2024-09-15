import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import StarshipDetail from "./Components/StarshipDetail/StarshipDetail.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (

        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/starship/:id" element={<StarshipDetail />} />
                </Routes>
            </Router>
        </div>
  )
}

export default App
