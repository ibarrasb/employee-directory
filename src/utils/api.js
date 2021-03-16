import Axios from "axios";
// gets api functionallity from axios to be able to import 
export default{ 
    getUsers:function(){   
         
            {/* Returns all the api results */}

        return Axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};