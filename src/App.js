import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Search from './components/Search';
import PetDetails from './components/PetDeatails';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <div className="app-content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/pet/:id" Component={PetDetails} />
          </Routes>
        </div>
        <footer className="app-footer">
          &copy; 2023 Petfinder App
        </footer>
      </div>
    </Router>
  );
}
export default App;
