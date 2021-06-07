import React , {useState} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Connections from "./pages/connections";
import Search from "./pages/search";
import HomePage from "./pages/home";
import Main from "./pages/main";

import Footer from "./components/footer";
import "./App.css";
import Nav from "./components/Nav";
import SignUpPage from "./pages/signup";



function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [signedup, setSignedup] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/connections"><Connections /></Route>
          <Route exact path="/search"><Search /></Route>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/">
              {loggedIn ? <Redirect to="/search" /> : < HomePage logInStatus={loggedIn} setloggedIn={setloggedIn}/>}
            </Route>
          <Route exact path="/main"><Main /></Route>
          <Route exact path="/signup">
            {signedup ? <Redirect to="/search" /> : < SignUpPage logInStatus={loggedIn} setSignedup={setSignedup}/>}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}



export default App;
