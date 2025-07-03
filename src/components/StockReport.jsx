import React from "react";
import "./StockeReport.css";
import { IoFilterOutline } from "react-icons/io5";
import { GiCardboardBox } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const dummyData = [
  {
    id: 1,
    productName: "Lenovo",
    quantity: "2",
    category: "pc",
    location: "patna",
    totalinventeryvalue: "48966",
  },
  {
    id: 2,
    productName: "fan",
    quantity: "100",
    category: "electric",
    location: "himalaya",
    totalinventeryvalue: "500",
  },
  {
    id: 3,
    productName: "camera",
    quantity: "150",
    category: "security",
    location: "delhi",
    totalinventeryvalue: "9000",
  },
];

function StockReport() {
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

          {/* Sorting & input */}
          <div className="select">
            <select className="sort">
              <option>Last 7 Days</option>

              <option>Last 10 Days</option>

              <option>Last 30 Days</option>
            </select>
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
                <p className="title">Low Stocks</p>
                <p className="count">
                  <b className="bold">77 items</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <span>
                  <b>+62</b>
                </span>
                <span className="footer-text-color">
                  items are below 10% of Total OTY
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
                <p className="title">Out of Stocks</p>
                <p className="count">
                  <b className="bold">554 items</b>
                </p>
              </div>
            </div>

            <div className="footer">
              <hr className="divider" />
              <div className="footer-text">
                <div className="span-footer">
                  <span>
                    <b>+322</b>
                  </span>
                  <span className="footer-text-color">
                    items Out of Stock this Week
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

        {/* Table Container */}

        <div>
          <div style={{color: "#000000"}}>
            <p>Current Stocks</p>
          </div>

          <div className="table-div">
            <table>
              <thead>
                <tr className="table-stock">
                  <th
                    style={{
                      textAlign: "left",
                      borderTopLeftRadius: "5px",
                      width: "70%",
                    }}
                  >
                    Product Name & SKU
                  </th>
                  <th>Quantity(Unit)</th>
                  <th>Category</th>
                  <th>location</th>
                  <th style={{ borderTopRightRadius: "5px" }}>
                    Total Inventory Value
                  </th>
                </tr>
              </thead>

              <tbody>
                {dummyData.map((item) => (
                  <tr className="content" key={item.id}>
                    <td className="table-details">
                      <div className="checkbox">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div>
                          <span style={{color:"#007AFF"}}>{item.productName}</span> <br /> <span style={{color:"#6B7280"}}>(SKU)</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-details">{item.quantity} Units</td>
                    <td className="table-details">{item.category}</td>
                    <td className="table-details">{item.location}</td>
                    <td className="table-details">
                      ${item.totalinventeryvalue}/-
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination */}

          <div style={{display:"flex", justifyContent:"space-between", background:"white", padding: "15px 25px"}}>
          <div className="foot">
            <span style={{color:"#6B7280", marginTop: "10px"}}>Result Per Page</span>
            <div className="page">
            <select className="page-border">
              <option>10</option>
            </select>
            </div>
            </div>

            {/* next & previous button */}

            <div className="footer-button">
              <button class="button" style={{borderTopLeftRadius:"8px", borderBottomLeftRadius:"8px"}}>Previous</button>              
              <button class="button">01</button>
              <button class="button">02</button>
              <button class="button" style={{borderTopRightRadius:"8px", borderBottomRightRadius:"8px"}}>Next</button>
            </div>

          </div>

        </div>


      </div>
    </>
  );
}

export default StockReport;
