import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Connections from "./pages/connections";
import Search from "./pages/search";
import HomePage from "./pages/home";
import Main from "./pages/main";

import Footer from "./components/footer";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SignupPage from "./pages/signup";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav />
      <Jumbotron>
        <h1>Google Books Search</h1>
        <p>Using Google API</p>
      </Jumbotron>
      <Switch>
        <Route exact path="/Connections"><Connections/></Route>
        <Route exact path="/Search"><Search/></Route>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/main"><Main /></Route>
        <Route exact path="/signup"><SignupPage /></Route>
      </Switch>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}



export default App;
