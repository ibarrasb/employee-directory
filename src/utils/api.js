import Axios from 'axios';

//Gets all the employees into directory 
    export default{
        getUser: function()
        {
            //calls axios function from api
            return Axios.get('https://randomuser.me/api/?results=200&nat=us')
        }
    };