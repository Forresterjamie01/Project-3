import React from "react";

class HomePage extends React.Component{
    state={

    }
    render(){
        return(<main>
               <div class="b-example-divider"></div>

<div class="container col-xl-10 col-xxl-8 px-4 py-5">
  <div class="row align-items-center g-lg-5 py-5">
    <div class="col-lg-7 text-center text-lg-start">
      <h1 class="display-4 fw-bold lh-1 mb-3">Your Talented. Get PluggedIn Now!</h1>
      <p class="col-lg-10 fs-4">Get Connected with other artists, entreprenuers, and freelancers in your area and around the world. Build your connects, collaborate on projects and network with artists of all levels in one place! Welcome to PluggedIn!  </p>
    </div>
    <div class="col-md-10 mx-auto col-lg-5">
      <form class="p-4 p-md-5 border rounded-3 bg-light">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"></input> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        <br></br>
        <br></br>
        <div class="d-flex justify-content-center links">
						Don't have an account? <a href="/signup" class="ml-2">Sign Up</a>
					</div>
        <hr class="my-4"></hr>
        <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
      </form>
    </div>
  </div>
</div>

<div class="b-example-divider"></div>

        </main>)
    }
}

export default HomePage;