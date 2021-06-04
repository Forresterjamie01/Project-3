import axios from "axios";


export default {
signup: function() {
    return axios.post("/api/signup")
},
login: function(infoObj) {
        return axios.post("/api/login", infoObj)
    } 
        
    
    }
    


