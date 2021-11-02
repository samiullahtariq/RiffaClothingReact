import React from "react";
import { Switch ,Route } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";

const App = () => {
    return (
        <>
            <Menu/>
            <div className="main-view">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/about" component={About}/>
              <Route  path="/contact" component={Contact}/>
          </Switch>
            </div>
        
          <Footer/>
        </>
    )
} 

export default App
