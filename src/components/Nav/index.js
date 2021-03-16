import React from 'react';
import SearchName from "../SearchName";
import "./Navbar.css";

function Nav() {
    return (
        <nav >

       <div className="srch-ar col-4">
        <SearchName />
    </div>
</nav>
    );
}
export default Nav;