import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { LuBrickWall } from "react-icons/lu";
import "./DashBoard.css";
import { Link } from "react-router-dom";

function First() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const [activeItem, setActiveItem] = useState(null); // new state

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "15px", backgroundColor: "#FFFFFF" }}>
        <div style={{ width: "20%" }}>
          <div className="sidebar" onClick={handleIconClick}>
            <div className="sidebar-content">
              <LuBrickWall className="brick-icon" /> <p>Report</p>
            </div>

            <IoIosArrowForward
              className={showDropdown ? "arrow-icon rotate" : "arrow-icon"}
            />
          </div>
          {showDropdown && (
            <div className="dropdown">
              <ul style={{ listStyle: "none", paddingLeft: 20 }}>
                <li
                  className={
                    activeItem === "stock"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("stock")}
                >
                  <Link to="/" className="link">
                    Stock Report
                  </Link>
                </li>
                
                <li
                  className={
                    activeItem === "movement"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("movement")}
                >
                  <Link to="/StockMovementsReport" className="link">
                    Stocks Movement Report
                  </Link>
                </li>

                <li
                  className={
                    activeItem === "sales"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("sales")}
                >
                  <Link to="/salesReport" className="link">
                    Sales Report
                  </Link>
                </li>

                <li
                  className={
                    activeItem === "purchase"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("purchase")}
                >
                  <Link to="/PurchaseReport" className="link">
                    Purchase Report
                  </Link>
                </li>

                <li
                  className={
                    activeItem === "return"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("return")}
                >
                  <Link to="/ReturnDamagesreport" className="link">
                    Return & Damages Report
                  </Link>
                </li>
                <li
                  className={
                    activeItem === "financial"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => handleItemClick("financial")}
                >
                  <Link to="/FinancialReport" className="link">
                    Financial Report
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div style={{ width: "80%" }}>
          Right
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default First;
