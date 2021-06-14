import axios from "axios";

// eslint-disable-next-line
export default {
    getData: function() {
        return axios.get("https://randomuser.me/api/?results=150&nat=us");
    }
};