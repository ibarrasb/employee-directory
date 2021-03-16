// wrapper component 

import React from "react";
// creates a function wrapper containing a child element inside
function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;