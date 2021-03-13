import React from "react";
import "./head.css";

//contains head component with the title and instructions
function Header () {
    return (
        <div className="header">
            <h1>React Employee Directory</h1>
            <p>Click on 'Name' to order aplhabetically</p>
        </div>
    )
}
export default Header;