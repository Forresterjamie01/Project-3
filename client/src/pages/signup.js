import React , {useState} from "react";
import API from "../utils/API";



function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mastering, setMastering] = useState("");
  const [mixing, setMixing] = useState("");
  const [production, setProduction] = useState("");

  const [error, setError] = useState("");


  // const [location, setlocation] = useState("");
  // const [mastering, setMastering] = useState("");
  // const [mixing, setMixing] = useState("");
  // const [production, setProduction] = useState("");

  const handleNamechange = (event) => {

    setName(event.target.value)
  }

  //we need another function for password
  const handleEmailchange = (event) => {

    setEmail(event.target.value)
  }

  const handlePasswordchange = (event) => {

    setPassword(event.target.value)
  }


  const handleMasteringchange = (event) => {

    setMastering(event.target.value)
  }

  const handleMixingchange = (event) => {

    setMixing(event.target.value)
  }

  const handleProductionchange = (event) => {

    setProduction(event.target.value)
  }




  /// a functon to handle the form submission
  const handleFormSubmit = () => {
    //we need to get the values of email and password
    if (!email) {
      return;
    }

    API.signup({ name: name, email: email, password: password, mastering: mastering, mixing: mixing, production: production })
      .then(res => {
        // if (res.data.length === 0) {
        //   throw new Error("No results found.");
        // }
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        if (res.signup) {
          props.setSignedup(true);
        }
        // setEmail(res.data[1]);
        // setPassword(res.data[2][0]);


      })
      .catch(err => setError(err));


  }






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
            <input type="text" name="name" value={name} onChange={handleNamechange} class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" value={email} onChange={handleEmailchange} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input type="password" name="password" value={password} onChange={handlePasswordchange} id="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></input>
          </div>
          <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" value={mastering} onChange={handleMasteringchange} type="checkbox" value="" id="invalidCheck2"></input>
                <label class="form-check-label" for="invalidCheck2">
                  Mastering
                </label>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" value={mixing} onChange={handleMixingchange} type="checkbox" value="" id="invalidCheck2"></input>
                <label class="form-check-label" for="invalidCheck2">
                  Mixing
                </label>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" value={production} onChange={handleProductionchange} type="checkbox" value="" id="invalidCheck2" ></input>
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
  

export default SignupPage;