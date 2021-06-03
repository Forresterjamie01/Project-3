import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import SavedBooks from "./pages/connections";
import SearchBooks from "./pages/search";
import HomePage from "./pages/main";
import Footer from "./components/footer";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";


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
        <Route exact path="/Saved"><SavedBooks/></Route>
        <Route exact path="/Search"><SearchBooks/></Route>
        <Route exact path="/"><HomePage /></Route>
      </Switch>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}



export default App;
