import React, { useContext } from "react";
import DataBody from "../D-Body";
import "./DataTable.css";
import DataAreaContext from "../../utils/DataAreaContext";
//creates all the data table content and returns it into the body depending on what it searches
const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (

        <div className="dat-table mt-5">
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

                <DataBody />
            </table>
        </div>
    );
}

export default DataTable;