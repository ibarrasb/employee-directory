import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

const SearchName = () => {
    //search box component which updates dynamically with up to date information
    const context = useContext(DataAreaContext);
    return (
        <div className="srch-bx">
            <form className="frm-inline">
            Enter a name to search directory:
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="First Name Only"
                    onChange={event => context.handleSearchChange(event)}
                />
            </form>
        </div>
    );
}
export default SearchName;