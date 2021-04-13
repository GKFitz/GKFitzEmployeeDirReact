import axios from "axios";

const num = 500;
const BASEURL = `https://randomuser.me/api/?results=${num}`;
//const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};