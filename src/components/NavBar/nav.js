import React from 'react';
import SearchByName from "../SearchByName";

//imports the styling of the nav component
import "./nav.css";

function Nav() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="search-area col-4">
   {/* Adds Search by name component inside the nav bar */}
    <SearchByName />
    </div>
</nav>
    );
}
export default Nav;