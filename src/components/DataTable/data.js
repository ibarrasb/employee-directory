import React, { useContext } from "react";
import DataBody from "../DataBody";
import "./data.css";
import DataAreaContext from "../../utils/DataAreaContext";

//data table component for the employees
const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="data mt-5">
        <table
        id="table"
        className="table table-striped table-hover table-condensed"
        >
        <thead>
            <tr>
                {context.developerState.headings.map(({ name, width }) => {
                            
                return (
                <th
                className="col"
                key={name}
                style={{ width }}
                onClick={() => {
                context.handleSort(name.toLowerCase());
                }}
                >
                    {name}
                <span className="pointer"></span>
                </th>
                    );
                })}
            </tr>
        </thead>
                {/*Imports data body component */}
                <DataBody />
        </table>
        </div>
    );
}

export default DataTable;