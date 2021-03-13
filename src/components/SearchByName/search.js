import React, { useContext } from "react";

import DataArea from "../../utils/DataArea";

const SearchName = () => {
    const context = useContext(DataArea);
// creates search to be able to specify the user you are looking for 
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
            </form>
        </div>
    );
}
export default SearchName;