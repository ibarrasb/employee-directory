import React from "react";

//Content wrapper for the content
function Wrapper({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>);
}
export default Wrapper;