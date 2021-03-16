import React, {useState, useEffect} from "react";
import DataTable from "../D-Table";
import Nav from "../Nav";
import API from "../../utils/api";
import "./DataArea.css";
import DataAreaC from "../../utils/DataAreaContext"

const DataArea = () => {
    //creates a set state and use state for each of the employees
      const [developerState, setDeveloperState] = useState({
        users: [],
    //when ever user clicks on 'name' it orders them by aphabet
        order: "ascend",
        filteredUsers: [],
        headings: [
        //contains information from the api that will be used in order to complete directory
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "DOB", width: "10%", }
        ]
      });
    
      const hSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else{
            setDeveloperState({
                order:"descend"
            })
        }
    
        const compareF = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredUsers.sort(compareF);

        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers
});

 };
   
      const handleSearch = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getUsers().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    
      return (
        <DataAreaC.Provider
          value={{ developerState, handleSearch, hSort }}
        >
          <Nav />
          <div className="d-area">
            {developerState.filteredUsers.length > 0 
    ? <DataTable />
     : <div></div>
     }
          </div>
        </DataAreaC.Provider>
      );
    }
    
    export default DataArea;