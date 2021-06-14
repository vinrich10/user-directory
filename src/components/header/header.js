import React from "react";
import "./header.css";
function Header () {
    return (
        <div className = "header py-5">
            <h1>User Directory</h1>
            <p>Click on the sort button to filter the employees names or use the search bar to narrow results. </p>
        </div>

    );

}

export default Header;