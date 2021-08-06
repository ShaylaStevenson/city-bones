import React from "react";
import {  Route, Switch } from "react-router-dom";
//used HashRouter in order to deploy to gh pages; set up in index.js
//BrowserRouter as Router,
import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import DrawerBottom from "./components/DrawerBottom"
import TopNav from "./components/TopNav";


const App = () => {
  console.log()
    return (
      <div className="App">
        
          <div>
          <TopNav />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Shop">
                <Shop />
              </Route>
              <Route exact path="/Gallery">
                <Gallery />
              </Route>
            </Switch>
            <DrawerBottom/>
           
          </div>
      </div>
    );
}

export default App