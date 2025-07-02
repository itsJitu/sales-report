import React from "react";
import "./FinancialReport.css";

function FinancialReport() {
  return (
    <>
      <div>
        <div className="header">

          {/* search bar */}
          <div className="search-sort" >
            <input type="search" placeholder="Search items here..." className="search" />
          </div>

          {/* sort by days */}
          <div>
            <select>
              <option value="7 days">Last 7 Days</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinancialReport;
