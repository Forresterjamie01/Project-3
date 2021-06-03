import React from "react";

class HomePage extends React.Component{
    state={

    }
    render(){
        return(<main>
               <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">We Need Your Talent and Expertise. Get PluggedIn!</h1>
        <p class="col-md-8 fs-4">Connect with different artists from around the world. Exchange, work and collaborate with artists of all levels here now !</p>
        <button class="btn btn-primary btn-lg" type="button">Sign up Here</button>
        <p class="col-md-8 fs-4">Already Signed up?</p>
        <button class="btn btn-primary btn-lg" type="button">Login</button>
      </div>
    </div>
        </main>)
    }
}

export default HomePage;