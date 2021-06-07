import React , {useState} from "react";
import API from "../utils/API";



function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
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

  const handleLocationchange = (event) => {

    setLocation(event.target.value)
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
  const handleFormSubmit = (event) => {
    event.preventDefault()
    //we need to get the values of name, email, password, mastering, mixing, production
    if (!name) {
      return;
    }

    API.signup({ name: name, email: email, password: password, location: location, mastering: false, mixing: false, production: false })
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
        window.location.href = "/search"
        // setEmail(res.data[1]);
        // setPassword(res.data[2][0]);


      })
      .catch(err => setError(err));


  }






  return (<body>
    <div id="second align-items-center">
      <div className="myform form ">
        <div className="logo mb-3">
          <div className="col-md-12 text-center">
            <h1 >Signup</h1>
          </div>
        </div>
        <form action="#" name="registration">
          <div className="form-group">
            <label for="exampleInputName">Name</label>
            <input type="text" name="name" value={name} onChange={handleNamechange} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" value={email} onChange={handleEmailchange} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword">Password</label>
            <input type="password" name="password" value={password} onChange={handlePasswordchange} id="password" className="form-control" aria-describedby="passwordhelp" placeholder="Enter Password"></input>
          </div>
          <div className="form-group">
            <label for="exampleInputLocation">Location</label>
            <input type="text" name="location" value={location} onChange={handleLocationchange} id="password" className="form-control" aria-describedby="locationhelp" placeholder="Enter Location"></input>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="form-check">
                  
                  <input className="form-check-input" value={mastering} onChange={handleMasteringchange} type="checkbox" value="" id="invalidCheck2"></input>
                  <label className="form-check-label" for="invalidCheck2">Mastering</label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="form-check">
                 
                 <input className="form-check-input" value={mixing} onChange={handleMixingchange} type="checkbox" value="" id="invalidCheck2"></input>
               <label className="form-check-label" for="invalidCheck2">Mixing</label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="form-check">
                  <input className="form-check-input" value={production} onChange={handleProductionchange} type="checkbox" value="" id="invalidCheck2" ></input>
                  <label className="form-check-label" for="invalidCheck2">Production</label>

              </div>
            </div>
          </div>




          <div className="col-md-12 text-center mb-3">
            <button type="button" onClick={handleFormSubmit} className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
          </div>
          <div className="col-md-12 ">
            <div className="form-group">
              <p className="text-center"><a href="/" id="signin">Already have an account?</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>

  </body>)
}
  

export default SignupPage;