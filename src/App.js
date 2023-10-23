import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import PetDetails from './components/PetDeatails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Petfinder App</h1>
        </header>
        <div className="app-content">
          <Switch>
            <Route exact path="/" Component={Home} />
            <Route exact path="/search" Component={Search} />
            <Route exact path="/pet/:id" Component={PetDetails} />
          </Switch>
        </div>
        <footer className="app-footer">
          &copy; 2023 Petfinder App
        </footer>
      </div>
    </Router>
  );
}
export default App;
