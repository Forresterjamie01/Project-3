import axios from "axios";


export default {
signup: function(signupOb) {
    return axios.post("/api/signup", signupOb)
},
login: function(infoObj) {
        return axios.post("/api/login", infoObj)
    } 
        
    
    }
    


