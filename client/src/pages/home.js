import React, { useState } from "react";
import API from "../utils/API";




function HomePage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleEmailchange = (event)=> {
    
    setEmail(event.target.value)
  }

  //we need another function for password
  const handlePasswordchange = (event)=> {
    
    setPassword (event.target.value)
  }
  

  /// a functon to handle the form submission
  const handleFormSubmit = ()=>{
    //we need to get the values of email and password
    if (!email) {
      return;
    }

    API.login({email: email, password: password})
      .then(res => {
        // if (res.data.length === 0) {
        //   throw new Error("No results found.");
        // }
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        if(res.login){
          props.setloggedIn(true);
        }
        // setEmail(res.data[1]);
        // setPassword(res.data[2][0]);
      

      })
      .catch(err => setError(err));
  

  }



        return<main>
               <div class="b-example-divider"></div>

<div className="container col-xl-10 col-xxl-8 px-4 py-5">
  <div className="row align-items-center g-lg-5 py-5">
    <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 mb-3">Your Talented. Get PluggedIn Now!</h1>
      <p className="col-lg-10 fs-4">Get Connected with other artists, entreprenuers, and freelancers in your area and around the world. Build your connects, collaborate on projects and network with artists of all levels in one place! Welcome to PluggedIn!  </p>
    </div>
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-light">
        <div className="form-floating mb-3">
          <input type="email" value={email} onChange={handleEmailchange} class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" value={password} onChange={handlePasswordchange} class="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"></input> Remember me
          </label>
        </div>
        <button onClick={handleFormSubmit}className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        <br/>
        <br/>
        <div className="d-flex justify-content-center links">
						Don't have an account? <a href="/signup" class="ml-2">Sign Up</a>
					</div>
        <hr className="my-4"></hr>
        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
      </form>
    </div>
  </div>
</div>

<div class="b-example-divider"></div>

        </main>
    
  }

export default HomePage;