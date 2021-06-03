import React from "react";

class SignupPage extends React.Component {
  state = {

  }
  render() {
    return (<body>
      <div id="second align-items-center">
        <div class="myform form ">
          <div class="logo mb-3">
            <div class="col-md-12 text-center">
              <h1 >Signup</h1>
            </div>
          </div>
          <form action="#" name="registration">
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input type="password" name="password" id="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></input>
            </div>
            <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"></input>
                <label class="form-check-label" for="invalidCheck2">
                  Mastering
                </label>
              </div>
            </div>
            </div>
            <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"></input>
                <label class="form-check-label" for="invalidCheck2">
                  Mixing
                </label>
              </div>
            </div>
            </div>
            <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" ></input>
                <label class="form-check-label" for="invalidCheck2">
                  Production
                </label>
              </div>
            </div>
            </div>
            



            <div class="col-md-12 text-center mb-3">
              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
            </div>
            <div class="col-md-12 ">
              <div class="form-group">
                <p class="text-center"><a href="/" id="signin">Already have an account?</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>

    </body>)
  }
}

export default SignupPage;