import React from "react";
import "./SalesReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const topSellingProducts = [
  {
    id: 1,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 2,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 3,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 4,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
  {
    id: 5,
    CustomerName: "RAM",
    Type: "Wholeseller",
    TotalSales: "$788.09",
    TopProducts: "green Aplle, New Mango, Coconut",
  },
];

function Salesreport() {
  return (
    <>
      <div className="container">
        <div className="header">
          {/* search-bar */}
          <div className="search">
            <input
              type="Search"
              placeholder="Search items here..."
              className="search-bar"
            />
            <IoFilterOutline />
          </div>
        </div>

        {/* Boxes */}

        <div className="box-container">
          {/* box-1 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Today,s Sales</p>
                <p className="count">
                  <b className="bold">$332.81</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span>
                  <b>+652</b>{" "}
                  <span className="footer-text-color">
                    items added this week
                  </span>
                </span>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Sales This Month</p>
                <p className="count">
                  <b className="bold">$53332.81</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <div className="span-footer">
                  {/* <span>
                    <b>+322</b>
                  </span> */}
                  <span className="footer-text-color">
                    Highest order on 5th, 12th & 20th
                  </span>
                </div>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Box-3 */}
          <div className="stock-card">
            <div className="stock-content">
              <div className="icon">
                <GiCardboardBox className="box-icon" />
              </div>
              <div className="text">
                <p className="title">Total Returns</p>
                <p className="count">
                  <b className="bold">$533729.62</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <div className="span-footer">
                  {/* <span>
                    <b>+322</b>
                  </span> */}
                  <span className="footer-text-color">
                    2.1% of totaol sales returned.
                  </span>
                </div>
                <div>
                  <FaArrowRight
                    style={{ fontSize: "15px" }}
                    className="arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* table of top Selling Products */}

        <div style={{ color: "#000000", fontWeight: "400", marginTop: "20px" }}>
          Top Selling Products
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr className="selling-product">
                <th style={{ width: "4px", borderTopLeftRadius:"5px" }}></th> {/* checkbox column */}
                <th style={{ textAlign: "left",  }}>Customer Name</th>
                <th>Type</th>
                <th>Total Sales</th>
                <th style={{ width: "50%", borderTopRightRadius:"5px" }}>Top Products</th>
              </tr>
            </thead>

            <tbody>
              {topSellingProducts.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.CustomerName}</td>
                  <td>{item.Type}</td>
                  <td>{item.TotalSales}</td>
                  <td>{item.TopProducts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default Salesreport;
