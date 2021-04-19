import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=";

const API =  {
  getEmployees: function(query) {
    let result = axios.get(BASEURL + query)
    return result;
  }
};

export default API;
